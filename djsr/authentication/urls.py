from django.urls import path, include

from rest_framework_simplejwt import views as jwt_views
from .views import SkillViewSet, SectionViewSet, CustomUserCreate, HelloWorldView, \
    LogoutAndBlacklistRefreshTokenForUserView, TaskViewSet, \
    UserRetrieveUpdateAPIView, ReturnUserInfo, PasswordSendResetView, PasswordResetView, TestJSONViewSet

# TODO resend activation token
urlpatterns = [
    path('user/skills/', SkillViewSet.as_view(), name="skills"),
    path('user/tests/', TestJSONViewSet.as_view(), name="Tests"),
    path('user/sections/', SectionViewSet.as_view(), name="sections"),
    path('user/tasks/', TaskViewSet.as_view(), name="tasks"),
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('user/activate/<token>/$', HelloWorldView.as_view(), name='activate-user'),
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('hello/', ReturnUserInfo.as_view(), name='hello_world'),
    path('blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist'),
    path('user/update/', UserRetrieveUpdateAPIView.as_view()),
    path('user/resetsend/',PasswordSendResetView.as_view(), name='sendreset'),
    path('user/passreset/<token>/$',PasswordResetView.as_view(), name='reset'),
]
