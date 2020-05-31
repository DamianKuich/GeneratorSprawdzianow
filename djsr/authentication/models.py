from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db import models
import datetime


# TODO email isn't unique
class CustomUser(AbstractUser):
    fav_color = models.CharField(blank=True, max_length=120)

# Create your models here.


class Skill(models.Model):
    Skill_name = models.CharField(max_length=500)

    def __str__(self):
        return self.nasza_nazwa()

    def nasza_nazwa(self):
        return self.Skill_name

class Section(models.Model):
    Section_name = models.CharField(max_length=500)
    skill = models.ManyToManyField(Skill)
    # tasks = models.ManyToManyField(Task)

    def __str__(self):
        return self.nasza_nazwa()

    def nasza_nazwa(self):
        return self.Section_name
class Task(models.Model):
    RODZAJE = {
        (0, 'Nieznany'),
        (1, 'Otwarte'),
        (2, 'Zamknięte'),
        (3, 'Krótka odpowiedź'),
    }
    RODZAJE2 = {
        (0, 'Nieznany'),
        (1, 'Podstawowy'),
        (2, 'Rozszerzony'),
    }
    text = models.TextField()
    add_date = models.DateField(default=datetime.date.today)
    typ = models.IntegerField(choices=RODZAJE, default=0)
    author = models.CharField(max_length=100)
    level = models.IntegerField(choices=RODZAJE2, default=0)
    answer = models.CharField(max_length=500)
    skill = models.ManyToManyField(Skill)


    def __str__(self):
        return self.nasza_nazwa()

    def nasza_nazwa(self):
        return self.text


class TestJSON(models.Model):
    name = models.CharField(max_length=500)
    tasks = models.TextField()
    created = models.DateField(default=datetime.date.today)
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

class PasswordSendReset(models.Model):
    email = models.EmailField(blank=True, max_length=254, verbose_name='email address')

class PasswordReset(models.Model):
    new_pass_1 = models.CharField(max_length=500)
    new_pass_2 = models.CharField(max_length=500)

class UserResetToken(models.Model):
    email = models.EmailField(blank=True, max_length=254, verbose_name='email address')
    expire = models.DateTimeField()
    created_on = models.DateTimeField()
    # auto_now_add=True
    used = models.DateTimeField(null=True)

class UserActivationToken(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    expire = models.DateTimeField()
    created_on = models.DateTimeField()
    # auto_now_add=True
    used = models.DateTimeField(null=True)
