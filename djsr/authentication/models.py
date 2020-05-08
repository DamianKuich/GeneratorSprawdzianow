from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    fav_color = models.CharField(blank=True, max_length=120)
# Create your models here.

class Umiejętność(models.Model):
    Nazwa_umiejetnosci = models.CharField(max_length=500)
    def __str__(self):
        return self.nasza_nazwa()

    def nasza_nazwa(self):
        return self.Nazwa_umiejetnosci


class Task(models.Model):
    Text = models.CharField(max_length=500)
    add_date = models.DateField()
    typ = models.CharField(max_length=50)
    author = models.CharField(max_length=100)
    level = models.CharField(max_length=100)
    answer = models.CharField(max_length=500)
    skilltask = models.ManyToManyField(Umiejętność)

    def __str__(self):
        return self.nasza_nazwa()

    def nasza_nazwa(self):
        return self.Text



class Dział(models.Model):
    Nazwa_dzialu = models.CharField(max_length=500)
    skill = models.ManyToManyField(Umiejętność)
    tasks = models.ManyToManyField(Task)
    def __str__(self):
        return self.nasza_nazwa()

    def nasza_nazwa(self):
        return self.Nazwa_dzialu



