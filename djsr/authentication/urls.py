from django.urls import path, include
from django.conf.urls import url
from rest_framework_simplejwt import views as jwt_views
from .views import CustomUserCreate, HelloWorldView, LogoutAndBlacklistRefreshTokenForUserView

urlpatterns = [
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('hello/', HelloWorldView.as_view(), name='hello_world'),
    path('blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist'),
    url(r'^api/password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
]
