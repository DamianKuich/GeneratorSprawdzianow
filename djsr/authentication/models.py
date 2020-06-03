from django.db import models
from django.contrib.auth.models import AbstractUser
from jsonfield import JSONField
from django.db import models

from django_mysql.models import ListCharField
import datetime


# TODO email isn't unique
class CustomUser(AbstractUser):
    fav_color = models.CharField(blank=True, max_length=120)

# Create your models here.


class Skill(models.Model):
    Skill = models.CharField(max_length=500)

    def __str__(self):
        return self.nasza_nazwa()

    def nasza_nazwa(self):
        return self.Skill

class Section(models.Model):
    Section = models.CharField(max_length=500)
    skill = models.ManyToManyField(Skill)
    # tasks = models.ManyToManyField(Task)

    def __str__(self):
        return self.nasza_nazwa()

    def nasza_nazwa(self):
        return self.Section
class Variables(models.Model):
    variables =ListCharField(
        base_field=models.CharField(max_length=10),
        size=6,
        max_length=(6 * 11),
        default = None# 6 * 10 character nominals, plus commas
    )
    values =ListCharField(
        base_field=models.CharField(max_length=10),
        size=6,
        max_length=(6 * 11),
        default = None# 6 * 10 character nominals, plus commas
    )
class Answers(models.Model):
    allanswers =ListCharField(
        base_field=models.CharField(max_length=10),
        size=6,
        max_length=(6 * 11),
        default = None # 6 * 10 character nominals, plus commas
    )
    correctans =ListCharField(
        base_field=models.CharField(max_length=10),
        size=6,
        max_length=(6 * 11),
        default = None # 6 * 10 character nominals, plus commas
    )
class Dataset(models.Model):
    variables = models.ManyToManyField(Variables)
    answers = models.ManyToManyField(Answers)


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
    text = models.CharField(max_length=500)
    add_date = models.DateField(default=datetime.date.today)
    typ = models.IntegerField(choices=RODZAJE, default=0)
    author = models.CharField(max_length=100)
    level = models.IntegerField(choices=RODZAJE2, default=0)
    skill = models.ManyToManyField(Skill)
    dataset = models.ManyToManyField(Dataset)


    def __str__(self):
        return self.nasza_nazwa()

    def nasza_nazwa(self):
        return self.text


class TestJSON(models.Model):
    name = models.TextField(null=True)
    tasks = JSONField(null=True)
    created = models.DateField(default=datetime.date.today)
    user_id = models.IntegerField()

    def __str__(self):
        return self.nasza_nazwa()

    def nasza_nazwa(self):
        return self.name

class PasswordSendReset(models.Model):
    email = models.EmailField(blank=True, max_length=254, verbose_name='email address')

class UserResetToken(models.Model):
    email = models.EmailField(blank=True, max_length=254, verbose_name='email address')
    expire = models.DateTimeField()
    created_on = models.DateTimeField()
    # auto_now_add=True
    used = models.BooleanField()

class UserActivationToken(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    expire = models.DateTimeField()
    created_on = models.DateTimeField()
    # auto_now_add=True
    used = models.BooleanField()
