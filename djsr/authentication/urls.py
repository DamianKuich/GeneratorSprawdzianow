from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import CustomUserCreate, HelloWorldView, LogoutAndBlacklistRefreshTokenForUserView, TasksViewSet

urlpatterns = [
    path('taski/', TasksViewSet.as_view(), name="taski"),
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('hello/', HelloWorldView.as_view(), name='hello_world'),
    path('blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist'),
]
