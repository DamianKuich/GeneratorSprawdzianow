from rest_framework import status, permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken,Token
from rest_framework_simplejwt.backends import TokenBackend
from rest_framework_simplejwt.exceptions import TokenBackendError, TokenError
from rest_framework_jwt.settings import api_settings
from django.urls import reverse

from .serializers import CustomUserSerializer, TaskSerializer, DziałSerializer, UmiejetnośćSerializer
from .models import Task, Dział, Umiejętność, CustomUser
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
            payload = jwt_payload_handler(user)
            token = jwt_encode_handler(payload)
            data = {
                    'confirmation_url': reverse(
                        'activate-user', args=[token]
                    )
                }
            return Response(data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HelloWorldView(APIView):

    def get(self, request,verify=True, *args, **kwargs,):
        token = kwargs.pop('json')
        try:
            payload = TokenBackend.decode(token=token,verify=verify)
        except TokenBackendError:
            raise TokenError(_('Token is invalid or expired'))
        CustomUser.objects.get(id=payload.get('user_id'))
        CustomUser.is_active=True
        CustomUser.save()
        return Response(
            {'User Activated'},
            status=status.HTTP_200_OK
        )



        #return Response(data={"user": str(request.user)}, status=status.HTTP_200_OK)


class LogoutAndBlacklistRefreshTokenForUserView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request,format='json'):
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
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class DziałViewSet(APIView):
    queryset = Dział.objects.all()
    serializer_class = DziałSerializer

class UmiejetnośćViewSet(APIView):
    queryset = Umiejętność.objects.all()
    serializer_class = DziałSerializer



