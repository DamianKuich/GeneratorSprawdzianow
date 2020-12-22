import datetime
import json
from itertools import chain
from copy import deepcopy
from django.db import connection
from rest_framework_simplejwt.utils import *
from django.core import serializers
import random
import math
from rest_framework import status, permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.backends import TokenBackend
from rest_framework_simplejwt.exceptions import TokenBackendError
from rest_framework_jwt.settings import api_settings
from django.http import HttpResponse
from django.conf import settings

from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import EmailMessage
import requests
import base64
import pdfkit

from .examToPdf.PdfFromNode import generatePdf, generateAnswersPdf

from .serializers import CustomUserSerializer, TaskSerializer, SectionSerializer, SkillSerializer, \
    CustomUserSerializerReadOnly, PasswordSendResetSerializer, TestJSONSerializer, ImageSerializer
from .serializers import SectionSerializerv2, AnswersSerializer
from .models import Sectionv2, Answers
from .models import Task, Section, Skill, CustomUser, UserActivationToken, \
    TestJSON, PasswordSendReset, UserResetToken, Image

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


class LatexToSvgView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        print("latex", request.data['latex'])
        latex = request.data['latex']

        # latex = kwargs.pop('latex')
        req = requests.get("https://math.now.sh?from=" + latex)
        return Response(req, status.HTTP_200_OK)


class CustomUserCreate(APIView):
    model = CustomUser.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = CustomUserSerializer

    def post(self, request, *args, **kwargs, ):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            # userr = CustomUser.objects.filter(email=serializer.email)
            if CustomUser.objects.filter(email=serializer.validated_data.get('email')).exists():
                return Response(status=status.HTTP_406_NOT_ACCEPTABLE)
            elif CustomUser.objects.filter(username=serializer.validated_data.get('username')).exists():
                return Response(status=status.HTTP_406_NOT_ACCEPTABLE)
            user = serializer.save()
            tokenbackend = TokenBackend(algorithm='RS256',
                                        signing_key=getattr(settings, "RS256_PRIVATE_KEY", None),
                                        verifying_key=getattr(settings, "RS256_PUBLIC_KEY", None))
            activation = UserActivationToken(user=CustomUser.objects.get(id=user.id),
                                             expire=datetime.datetime.utcnow() + datetime.timedelta(0,
                                                                                                    3600) + datetime.timedelta(
                                                 0, 3600) + datetime.timedelta(0, 3600),
                                             created_on=datetime.datetime.utcnow() + datetime.timedelta(0,
                                                                                                        3600) + datetime.timedelta(
                                                 0, 3600),
                                             used=False
                                             )
            activation.save()
            token = tokenbackend.encode(
                {'user_id': user.id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(0, 3600)})
            data = {
                'confirmation_token': token
            }
            user.is_active = False
            user.save()
            mail_subject = 'Activate your account.'
            current_site = get_current_site(request)
            activation_link = "http://{0}/activateaccount/{1}".format(current_site, token)
            message = "Hello {0},\n click the link below to activate your account.\n {1}".format(user.username,
                                                                                                 activation_link)
            email = EmailMessage(mail_subject, message, to=[user.email])
            email.send()
            return Response(data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PasswordSendResetView(APIView):
    model = PasswordSendReset.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = PasswordSendResetSerializer

    def post(self, request):
        serializer = PasswordSendResetSerializer(data=request.data)
        if serializer.is_valid():
            if CustomUser.objects.filter(email=serializer.validated_data.get('email')).exists():
                reset = serializer.save()
                # TODO check if token isn't used
                tokenbackend = TokenBackend(algorithm='RS256',
                                            signing_key=getattr(settings, "RS256_PRIVATE_KEY", None),
                                            verifying_key=getattr(settings, "RS256_PUBLIC_KEY", None))
                reset = UserResetToken(email=reset.email,
                                       expire=datetime.datetime.utcnow() + datetime.timedelta(0,
                                                                                              3600) + datetime.timedelta(
                                           0, 3600) + datetime.timedelta(0, 3600),
                                       created_on=datetime.datetime.utcnow() + datetime.timedelta(0,
                                                                                                  3600) + datetime.timedelta(
                                           0, 3600),
                                       used=False
                                       )
                reset.save()
                token = tokenbackend.encode(
                    {'user_email': reset.email, 'exp': datetime.datetime.utcnow() + datetime.timedelta(0, 3600)})
                # TODO check if user is active
                mail_subject = 'Reset your password.'
                current_site = get_current_site(request)
                activation_link = "http://{0}/passreset/{1}".format(current_site, token)
                message = "Hello ,\n click the link below to reset your password.\n {0}".format(activation_link)
                email = EmailMessage(mail_subject, message, to=[reset.email])
                email.send()
            return Response(serializer.errors, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PasswordResetView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, **kwargs):
        if True:
            token = kwargs.pop('token')
            tokenbackend = TokenBackend(algorithm='RS256',
                                        signing_key=getattr(settings, "RS256_PRIVATE_KEY", None),
                                        verifying_key=getattr(settings, "RS256_PUBLIC_KEY", None))
            try:
                payload = tokenbackend.decode(token=token, verify=True)
            except TokenBackendError:
                return Response({'error': 'Invalid token'}, status=status.HTTP_403_FORBIDDEN)
            if UserResetToken.expire == (
                    datetime.datetime.utcnow() + datetime.timedelta(3600) + datetime.timedelta(0, 3600)):
                return Response(status=status.HTTP_409_CONFLICT)
            if UserResetToken.used is True:
                return Response(status=status.HTTP_409_CONFLICT)
            email = payload.get('user_email')
            user = CustomUser.objects.get(email=email)
            password = request.data['password']
            user.set_password(password)
            user.save()
            return Response(status=status.HTTP_202_ACCEPTED)


class HelloWorldView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, *args, **kwargs):
        token = kwargs.pop('token')
        # TODO check token isnt used
        tokenbackend = TokenBackend(algorithm='RS256',
                                    signing_key=getattr(settings, "RS256_PRIVATE_KEY", None),
                                    verifying_key=getattr(settings, "RS256_PUBLIC_KEY", None))
        try:
            payload = tokenbackend.decode(token=token, verify=True)
        except TokenBackendError:
            return Response({'error': 'Invalid token'}, status=status.HTTP_403_FORBIDDEN)
        if UserActivationToken.expire == (
                datetime.datetime.utcnow() + datetime.timedelta(3600) + datetime.timedelta(0, 3600)):
            return Response(status=status.HTTP_409_CONFLICT)
        if UserActivationToken.used is True:
            return Response(status=status.HTTP_409_CONFLICT)
        user = CustomUser.objects.get(id=payload.get('user_id'))
        # token_id = UserActivationToken.pk
        # UserActivationToken.objects.get(id=payload.get('token_id'))
        user.is_active = True
        user.save()
        return Response(
            {"message": 'User Activated'},
            status=status.HTTP_200_OK
        )


class ReturnUserInfo(APIView):
    def get(self, request):
        return Response(data={"user": str(request.user)}, status=status.HTTP_200_OK)


class LogoutAndBlacklistRefreshTokenForUserView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request, format='json'):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(data={"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class UserRetrieveUpdateAPIView(APIView):
    # Allow only authenticated users to access this url
    permission_classes = (IsAuthenticated,)
    serializer_class = CustomUserSerializer

    def get(self, request, *args, **kwargs):
        # serializer to handle turning our `User` object into something that
        # can be JSONified and sent to the client.
        serializer = self.serializer_class(request.user)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, *args, **kwargs):
        user = request.user
        try:
            if request.data['password']:
                starehaslo = request.data['oldpassword']
                if user.check_password(starehaslo):
                    password = request.data['password']
                    user.set_password(password)
                else:
                    return Response({"oldpassword": "Old password doesnt match"}, status=status.HTTP_400_BAD_REQUEST)
        except:
            pass
        try:
            if request.data['username']:
                user.username = request.data['username']
        except:
            pass
        try:
            if not CustomUser.objects.filter(email=request.data['email']).exists():
                user.email = request.data['email']
            else:
                return Response(status=status.HTTP_406_NOT_ACCEPTABLE)

        except:
            pass
        user.save()

        serializer = CustomUserSerializerReadOnly(user, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)


class TaskViewSet(APIView):

    permission_classes = (IsAuthenticated,)
    serializer_class = TaskSerializer

    def post(self, request, format=None):
        author_id = CustomUser.objects.get(id=request.user.id)
        lista = []
        if request.data:
            id_string = request.data['skill']
            print ("XD")
            numberoftask = int(request.data['nroftasks'])
            try:
                pag = int(request.data['pagenr'])
            except:
                pag = 1
        else:
            id_string = None
        if id_string is not None:
            for id in id_string.split(','):
                task = Task.objects.filter(skill=id, private=False)
                serializer = TaskSerializer(task, many=True)
                lista.append(serializer.data)
                taskprv = Task.objects.filter(skill=id, private=True, author=author_id)
                serializerprv = TaskSerializer(taskprv, many=True)
                lista.append(serializerprv.data)
                a = math.ceil((len(list(chain(*lista))) / numberoftask))
            if pag == 1:
                print ("XD")
                return Response(data={"pages": str(a), "tasks": list(chain(*lista))[0:numberoftask]})
            elif pag > 1:
                return Response(data={"pages": str(a), "tasks": list(chain(*lista))[(
                                                                                            pag * numberoftask) - numberoftask:pag * numberoftask]})
        else:
            task = Task.objects.all()
            serializer = TaskSerializer(task, many=True)
            return Response(serializer.data)


class GetRandomTasksViewSet(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = TaskSerializer

    def post(self, request, format=None):
        print("get auto tasks data", request.data)
        if request.data:
            try:
                author_id = CustomUser.objects.get(id=request.user.id)
                lista = []
                listaotw = []
                listazamk = []
                ileotw = int(request.data['ileotw'])
                ilezamk = int(request.data['ilezamk'])
                level = int(request.data['level'])
                skills = request.data['skills']
                if skills is not None:
                    if ilezamk != 0:
                        for skillid in skills.split(','):
                            listazamk = []
                            task = Task.objects.filter(skill=skillid, type=2, private=False, level=level)
                            serializer = TaskSerializer(task, many=True)
                            taskpriv = Task.objects.filter(skill=skillid, type=2, private=True, author=author_id,
                                                           level=level)
                            serializerpriv = TaskSerializer(taskpriv, many=True)
                            listazamk.append(serializer.data)
                            listazamk.append(serializerpriv.data)
                            a = list(chain(*listazamk))
                            random.shuffle(a)
                            b = math.ceil(ilezamk/len(skills.split(',')))
                            lista.append(a[:b])

                    pom = len(list(chain(*lista))) - ilezamk
                    if pom>0:
                        lista=list(chain(*lista))[:pom*-1]
                    lenzam1 = len(lista)
                    lista2 = []
                    if ileotw != 0:
                            for skillid in skills.split(','):
                                listaotw = []
                                task = Task.objects.filter(skill=skillid, type=1, private=False, level=level)
                                serializer = TaskSerializer(task, many=True)
                                taskprv = Task.objects.filter(skill=skillid, type=1, private=True, author=author_id,
                                                              level=level)
                                serializerprv = TaskSerializer(taskprv, many=True)
                                listaotw.append(serializer.data)
                                listaotw.append(serializerprv.data)
                                a = list(chain(*listaotw))
                                random.shuffle(a)
                                b = math.ceil(ileotw / len(skills.split(',')))
                                lista2.append(a[:b])
                    pomo = len(list(chain(*lista2))) - ileotw
                    if pomo> 0:
                        lista2 = list(chain(*lista2))[:pomo*-1]
                    lenotw = len(lista2)
                    for x in list(chain(*lista2)):
                        lista.append(x)
                return Response(lista, status=status.HTTP_200_OK)
            except Exception as e:
                print("mt er1")
                return Response(data={"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class MakeTestViewSet(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = TaskSerializer

    def post(self, request, format=None):
        print("make test rq data", request.data)
        if request.data:
            try:
                nazwa = request.data['name']
                pomoc = CustomUser.objects.get(id=request.user.id)
                if not TestJSON.objects.filter(name=nazwa, user_id=pomoc.id).exists():
                    mojtest = TestJSON()
                    mojtest.name = nazwa
                    mojtest.tasks = request.data['tasks']
                    mojtest.created = datetime.date.today()
                    pomoc = CustomUser.objects.get(id=request.user.id)
                    mojtest.user_id = pomoc.id
                    mojtest.save()
                    test = TestJSON.objects.get(name=nazwa, user_id=request.user.id)
                    testt = TestJSON.objects.filter(id=test.id, user_id=request.user.id)
                    serializer = TestJSONSerializer(testt, many=True)
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    print("make test err 1")
                    return Response(status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                print("mt er2")
                return Response(data={"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        print("MT put req data", request.data)
        if request.data:
            try:
                id = request.data['id']
                if TestJSON.objects.filter(id=id, user_id=request.user.id).exists():
                    mojtest = TestJSON.objects.get(id=id)
                    try:
                        if not TestJSON.objects.filter(name=request.data['newname'], user_id=request.user.id).exists():
                            mojtest.name = request.data['newname']
                    except:
                        pass
                    try:
                        mojtest.tasks = request.data['tasks']
                    except:
                        pass
                    mojtest.save()
                    return Response(status=status.HTTP_200_OK)
                else:
                    return Response(status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                return Response(data={"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, format=None):
        print("MT delete req data", request.data)
        if request.data:
            try:
                id = request.data['id']
                if TestJSON.objects.filter(id=id, user_id=request.user.id).exists():
                    mojtest = TestJSON.objects.filter(id=id, user_id=request.user.id)
                    mojtest.delete()
                    return Response(status=status.HTTP_200_OK)
                else:
                    return Response(status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                return Response(data={"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class DeleteTestViewSet(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = TaskSerializer

    def post(self, request, format=None):
        print("MT delete req data", request.data)
        if request.data:
            try:
                id = request.data['id']
                if TestJSON.objects.filter(id=id, user_id=request.user.id).exists():
                    mojtest = TestJSON.objects.filter(id=id, user_id=request.user.id)
                    mojtest.delete()
                    return Response(status=status.HTTP_200_OK)
                else:
                    return Response(status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                return Response(data={"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class DeleteTestViewSet(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = TaskSerializer

    def post(self, request, format=None):
        print("MT delete req data", request.data)
        if request.data:
            try:
                id = request.data['id']
                if TestJSON.objects.filter(id=id, user_id=request.user.id).exists():
                    mojtest = TestJSON.objects.filter(id=id, user_id=request.user.id)
                    mojtest.delete()
                    return Response(status=status.HTTP_200_OK)
                else:
                    return Response(status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                return Response(data={"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class MakeTestCopyViewSet(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = TaskSerializer

    def post(self, request, format=None):
        if request.data:
            try:
                id = request.data['id']
                pomoc = CustomUser.objects.get(id=request.user.id)
                obj = TestJSON.objects.get(id=id, user_id=pomoc.id)
                pomo = obj.name
                pomm = pomo + 'Copy'
                obj.name = pomm
                obj.pk = None
                obj.save()
                ob = TestJSON.objects.get(name=pomo + 'Copy', user_id=pomoc.id)
                serializer = TestJSONSerializer(ob, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Exception as e:
                return Response(data={"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class SkilltoSections(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = SectionSerializerv2

    def get(self, request, format=None):
        s = Sectionv2.objects.all()
        s.delete()
        sec = Section.objects.all()
        serializer = SectionSerializer(sec, many=True)
        for section in sec:
            name = section.nasza_nazwa()
            id = section.id
            sec2 = Sectionv2.objects.create(id = id,Section=name)
            sec2.save()
        ss = Sectionv2.objects.all()
        seco = SectionSerializerv2(ss, many=True)
        for s in ss:
            s2 = Section.objects.get(Section=s.Section)
            fields = ('Skill')
            skil = Skill.objects.filter(section=s2.id).only(fields)
            s.skilll.set(skil)
            s.save()
        seco = Sectionv2.objects.all()
        seria = SectionSerializerv2(seco, many=True)
        return Response(seria.data)

class SkilltoSectionsAutoGene(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = SectionSerializerv2

    def get(self, request, format=None):
        s = Sectionv2.objects.all()
        s.delete()
        list = []
        sec = Section.objects.all()
        for section in sec:
            name = section.nasza_nazwa()
            id = section.id
            sec2 = Sectionv2.objects.create(id = id,Section=name)
            sec2.save()
        ss = Sectionv2.objects.all()
        for s in ss:
            s2 = Section.objects.get(Section=s.Section)
            fields = ('Skill')
            skil = Skill.objects.filter(section=s2.id).only(fields)
            s.skilll.set(skil)
            s.save()
        seco = Sectionv2.objects.all()
        seria = SectionSerializerv2(seco, many=True)
        for x in seria.data:
            sum = 0
            for y in x['skilll']:
                count = Task.objects.filter(skill=y['id'], private=False).count()
                sum+=count
                y['#Tasks']=count
            x['Section#Tasks'] = sum
            list.append(x)
        return Response(list)


class AddTask(APIView):
    permission_classes = (IsAuthenticated,)
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def post(self, request, format=None):
        if request.data:
            try:
                wrongans = request.data['wrong_answers']
                corrans = request.data['correct_answers']
                skills = request.data['skills_id']
                text = request.data['text']
                user = CustomUser.objects.get(id=request.user.id)
                if not Task.objects.filter(text=text).exists():
                    my_task = Task.objects.create(text=text,
                                                  wronganswers=wrongans,
                                                  correctans=corrans,
                                                  type=int(request.data['type']),
                                                  level=int(request.data['level']),
                                                  private=int(request.data['private']),
                                                  points=int(request.data['points']),
                                                  author=user)
                    for skillid in skills.split(','):
                        skil = Skill.objects.filter(id=skillid)
                        my_task.skill.set(skil)
                    my_task.save()
                    task = Task.objects.filter(text=text)
                    serializer = TaskSerializer(task, many=True)
                    return Response(serializer.data, status=status.HTTP_200_OK)
            except Exception as e:
                return Response(data={"error": str(e)}, status=status.HTTP_402_PAYMENT_REQUIRED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class AddSection(APIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Section.objects.all()
    serializer_class = SectionSerializer

    def post(self, request, format=None):
        if request.data:
            try:
                section = request.data['section_name']
                if not Section.objects.filter(Section=section).exists():
                    sect = Section.objects.create(Section=section)
                    sect.save()
                    sec = Section.objects.filter(Section=section)
                    serializer = SectionSerializer(sec, many=True)
                    return Response(serializer.data, status=status.HTTP_200_OK)
            except Exception as e:
                return Response(data={"error": str(e)}, status=status.HTTP_403_FORBIDDEN)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class AddSkill(APIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

    def post(self, request, format=None):
        if request.data:
            try:
                skill = request.data['skill_name']
                section = request.data['section_id']
                sect = Section.objects.get(id=section)
                if not Skill.objects.filter(Skill=skill).exists():
                    sk = Skill.objects.create(Skill=skill, section=sect)
                    sk.save()
                    skl = Skill.objects.filter(Skill=skill)
                    serializer = SkillSerializer(skl, many=True)
                    return Response(serializer.data, status=status.HTTP_200_OK)
            except Exception as e:
                return Response(data={"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)


class AddAnswers(APIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Answers.objects.all()
    serializer_class = AnswersSerializer

    def post(self, request, format=None):
        if request.data:
            try:
                wrongans = request.data['wrong_answers']
                corrans = request.data['correct_answers']
                if not Answers.objects.filter(wronganswers=wrongans, correctans=corrans).exists():
                    ans = Answers.objects.create(wronganswers=wrongans, correctans=corrans)
                    ans.save()
                    answer = Answers.objects.filter(wronganswers=wrongans, correctans=corrans)
                    serializer = AnswersSerializer(answer, many=True)
                    return Response(serializer.data, status=status.HTTP_200_OK)
            except Exception as e:
                return Response(data={"error": str(e)}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class SectionViewSet(APIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Section.objects.all()
    serializer_class = SectionSerializer

    def get(self, request, format=None):
        dzial = Section.objects.all()
        serializer = SectionSerializer(dzial, many=True)
        return Response(serializer.data)


class AllTestsJSONViewSet(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = TestJSONSerializer

    def get(self, request, format=None):
        tests = TestJSON.objects.filter(user_id=request.user.id)
        serializer = TestJSONSerializer(tests, many=True)
        return Response(serializer.data)


class OneTestJSONViewSet(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = TestJSONSerializer

    def get(self, request, *args, **kwargs):
        id = kwargs.pop('id')
        test = TestJSON.objects.filter(id=id, user_id=request.user.id)
        serializer = TestJSONSerializer(test, many=True)
        return Response(serializer.data)


class SkillViewSet(APIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

    def get(self, request, format=None):
        skill = Skill.objects.all()
        serializer = SkillSerializer(skill, many=True)
        return Response(serializer.data)


class ImageViewSet(APIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

    def get(self, request, *args, **kwargs):
        id = kwargs.pop('id')
        imag = Image.objects.get(id=id)
        image_data = open("media/" + str(imag.image), "rb").read()
        return HttpResponse(image_data, content_type="image/png")


class AddImageViewSet(APIView):
    permission_classes = (IsAuthenticated,)
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

    def post(self, request, *args, **kwargs):
        file = request.data['file']
        pomoc = CustomUser.objects.get(id=request.user.id)
        if True:
            image = Image.objects.create(name="", image=file, user_id=pomoc.id)
            image.save()
            return Response(data={"id": image.id}, status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class AddImageToTaskViewSet(APIView):
    permission_classes = (IsAuthenticated,)
    queryset = Task.objects.all()
    serializer_class = ImageSerializer

    def post(self, request, *args, **kwargs):
        # database
        file = request.data['file']
        pomoc = CustomUser.objects.get(id=request.user.id)
        if not Image.objects.filter(name=request.data['name'], image=file, user_id=pomoc.id).exists():
            image = Image.objects.create(name=request.data['name'], image=file, user_id=pomoc.id)
            image.save()
            # dataset
            id = request.data['taskid']
            task = Task.objects.get(id=id)
            image = Image.objects.filter(name=request.data['name'])
            task.image.set(image)
            task.save()
            image_data = open("media/" + str(image.image), "rb").read()
            return HttpResponse(image_data, content_type="image/png")
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)




class TestTasksiewSet(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = TestJSONSerializer

    def get(self, request, *args, **kwargs):
        # type = args.pop('type')
        id = kwargs.pop('id')

        test = list(TestJSON.objects.filter(id=id).values())[0]
        print(test['tasks'])
        tasks = json.loads(test['tasks'])
        pdf, html = generatePdf(tasks=tasks, name=test['name'])
        # pdf, html = generatePdf(tasks=tasks, name=test['name'])
        return HttpResponse(pdf, content_type="application/pdf")


class TestAnswersviewSet(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = TestJSONSerializer

    def get(self, request, *args, **kwargs):
        # type = args.pop('type')
        id = kwargs.pop('id')

        test = list(TestJSON.objects.filter(id=id).values())[0]
        print(test['tasks'])
        tasks = json.loads(test['tasks'])
        pdf, html = generateAnswersPdf(tasks=tasks, name=test['name'])
        return HttpResponse(pdf, content_type="application/pdf")

