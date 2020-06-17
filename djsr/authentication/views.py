import datetime
from itertools import chain
import simplejson
from rest_framework import status, permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken, Token
from rest_framework_simplejwt.backends import TokenBackend
from rest_framework_simplejwt.exceptions import TokenBackendError, TokenError
from rest_framework_jwt.settings import api_settings
from django.urls import reverse
from django.conf import settings
from django.template.loader import render_to_string
from django.core.mail import send_mail
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from django.core.mail import EmailMessage
from django.db import IntegrityError
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.shortcuts import render, redirect
from schema import Schema, And, Use, Optional


from .serializers import CustomUserSerializer, TaskSerializer, SectionSerializer, SkillSerializer, \
    CustomUserSerializerReadOnly, PasswordSendResetSerializer, TestJSONSerializer
from .models import Task, Section, Skill, CustomUser, UserActivationToken, \
    TestJSON, PasswordSendReset, UserResetToken

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


class CustomUserCreate(APIView):
    model = CustomUser.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = CustomUserSerializer

    def post(self, request, *args, **kwargs, ):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            #userr = CustomUser.objects.filter(email=serializer.email)
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
            message = "Hello {0},\n click the link below to activate your account.\n {1}".format(user.username, activation_link)
            email = EmailMessage(mail_subject, message, to=[user.email])
            email.send()
            return Response(data,status=status.HTTP_201_CREATED)
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
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
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
        if UserActivationToken.expire == (datetime.datetime.utcnow() + datetime.timedelta(3600) + datetime.timedelta(0, 3600)):
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
    #permission_classes = (permissions.AllowAny,)
    permission_classes = (IsAuthenticated,)
    serializer_class = TaskSerializer
    def post(self, request, format=None):
        serializer = TaskSerializer(data=request.data)
        lista = []
        # schema = Schema([{'id': And(Use(int)),
        #                   'text': And(str, len),
        #                   'add_date':{'type': 'string', 'pattern': '^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$'},
        #                   'typ': And(Use(int)),
        #                   'author': And(str, len),
        #                   'level': And(Use(int)),
        #                   'answer': And(str, len),
        #                   'skill': And(str, len)}])
        if request.data:
            id_string = request.data['skill']
            user = request.user
        else:
            id_string = None
        if id_string is not None:
            for id in id_string.split(','):
                task = Task.objects.filter(skill=id)
                serializer = TaskSerializer(task, many=True)
                lista.append(serializer.data)
                # validated = schema.validate(test)
            return Response(list(chain(*lista)))
        else:
            task = Task.objects.all()
            serializer = TaskSerializer(task, many=True)
            return Response(serializer.data)

class MakeTestViewSet(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = TaskSerializer
    def post(self, request, format=None):
        if request.data:
            try:
                nazwa = request.data['test']
                pomoc = CustomUser.objects.get(id=request.user.id)
                mojtest = TestJSON()
                mojtest.name = nazwa
                mojtest.tasks = request.data['tasks']
                mojtest.created = datetime.date.today()
                pomoc = CustomUser.objects.get(id=request.user.id)
                mojtest.user_id = pomoc.id
                mojtest.save()
                return Response(status=status.HTTP_200_OK)
            except Exception as e:
                return Response(data={"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, format=None):
        if request.data:
            try:
                nazwa = request.data['test']
                if TestJSON.objects.get(name=nazwa,user_id=request.user.id).exists():
                    mojtest = TestJSON.objects.get(name=nazwa)
                    try:
                        mojtest.name = request.data['newname']
                    except:
                        pass
                    try:
                        mojtest.tasks = simplejson.dumps(request.data['tasks'])
                    except:
                        pass
                    mojtest.created = datetime.date.today()
                    pomoc = CustomUser.objects.get(id=request.user.id)
                    mojtest.user_id = pomoc.id
                    mojtest.save()
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
                obj = TestJSON.objects.get(id=id,user_id=pomoc.id)
                pomo = obj.name
                obj.name = pomo + 'Copy'
                obj.pk = None
                obj.save()
                return Response(status=status.HTTP_200_OK)
            except Exception as e:
                return Response(data={"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
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

    def post(self, request, format=None):
        id = request.data['id']
        test = TestJSON.objects.filter(id=id,user_id=request.user.id)
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
