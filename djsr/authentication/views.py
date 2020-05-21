import datetime

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
from django.core.mail import send_mail
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from django.core.mail import EmailMessage
from django.db import IntegrityError

from .serializers import CustomUserSerializer, TaskSerializer, SectionSerializer, SkillSerializer
from .models import Task, Section, Skill, CustomUser, UserActivationToken

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


class CustomUserCreate(APIView):
    model = CustomUser.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = CustomUserSerializer

    def post(self, request, *args, **kwargs, ):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            tokenbackend = TokenBackend(algorithm='RS256',
                                        signing_key=getattr(settings, "RS256_PRIVATE_KEY", None),
                                        verifying_key=getattr(settings, "RS256_PUBLIC_KEY", None))

            # TODO save token to database
            activation = UserActivationToken(user=CustomUser.objects.get(id=user.id),
                                             expire=datetime.datetime.utcnow() + datetime.timedelta(0,
                                                                                                    3600) + datetime.timedelta(
                                                 0, 3600) + datetime.timedelta(0, 3600),
                                             created_on=datetime.datetime.utcnow() + datetime.timedelta(0,
                                                                                                        3600) + datetime.timedelta(
                                                 0, 3600),
                                             used=None
                                             )
            activation.save()
            token = tokenbackend.encode(
                {'user_id': user.id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(0, 3600)})
            data = {
                'confirmation_token': token
            }
            mail_subject = 'Activate your account.'
            current_site = get_current_site(request)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            activation_link = "{0}/activateaccount/{2}".format(current_site, uid, token)
            message = "Hello {0},\n {1}".format(user.username, activation_link)
            email = EmailMessage(mail_subject, message, to=[user.email])
            email.send()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HelloWorldView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, activation, verify=True, *args, **kwargs):
        token = kwargs.pop('token')
        # TODO check token isnt used
        tokenbackend = TokenBackend(algorithm='RS256',
                                    signing_key=getattr(settings, "RS256_PRIVATE_KEY", None),
                                    verifying_key=getattr(settings, "RS256_PUBLIC_KEY", None))
        try:
            payload = tokenbackend.decode(token=token, verify=True)
        except TokenBackendError:
            return Response({'error': 'Invalid token'}, status=status.HTTP_403_FORBIDDEN)
        user = CustomUser.objects.get(id=payload.get('user_id'))
        token_id = UserActivationToken.pk
        # Add token id
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
        user.username = request.data['username']
        user.email = request.data['email']
        user.save()

        serializer = CustomUserSerializer(user, many=False)
        return Response(serializer.data)


class TaskViewSet(APIView):
    permission_classes = (permissions.AllowAny,)
    # permission_classes = (IsAuthenticated,)
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get(self, request, format=None):
        lista = []
        if request.data:
            id_string = request.data['skill']
        else:
            id_string = None
        if id_string is not None:
            for id in id_string.split(','):
                task = Task.objects.get(skill=id)
                lista.append(task)
            serializer = TaskSerializer(lista, many=True)
            return Response(serializer.data)
        else:
            task = Task.objects.all()
            serializer = TaskSerializer(task, many=True)
            return Response(serializer.data)


class SectionViewSet(APIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Section.objects.all()
    serializer_class = SectionSerializer

    def get(self, request, format=None):
        dzial = Section.objects.all()
        serializer = SectionSerializer(dzial, many=True)
        return Response(serializer.data)


class SkillViewSet(APIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

    def get(self, request, format=None):
        skill = Skill.objects.all()
        serializer = SkillSerializer(skill, many=True)
        return Response(serializer.data)
