from django.conf.urls import url
from django.urls import path, include
from .views import index
urlpatterns = [
    path('', index),  # for the empty url
    url(r'^.*/$', index)  # for all other urls
]
