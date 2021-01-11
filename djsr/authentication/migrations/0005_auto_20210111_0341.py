# Generated by Django 3.1.4 on 2021-01-11 03:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0004_auto_20210109_1950'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='level',
            field=models.IntegerField(choices=[(1, 'Podstawowy'), (0, 'Nieznany'), (2, 'Rozszerzony')]),
        ),
        migrations.AlterField(
            model_name='task',
            name='type',
            field=models.IntegerField(choices=[(0, 'Nieznany'), (3, 'Krótka odpowiedź'), (1, 'Otwarte'), (2, 'Zamknięte')]),
        ),
        migrations.AlterField(
            model_name='testjson',
            name='user_id',
            field=models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
