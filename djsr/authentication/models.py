from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    fav_color = models.CharField(blank=True, max_length=120)
# Create your models here.


class Tasks(models.Model):
    Text = models.CharField(max_length=500)
    add_date = models.DateField()
    is_open = models.IntegerField()
    author = models.CharField(max_length=100)
    true_false = models.IntegerField()
    abcd = models.IntegerField()
    difficulty = models.IntegerField()
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

