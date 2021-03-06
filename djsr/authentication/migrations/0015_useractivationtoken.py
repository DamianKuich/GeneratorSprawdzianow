# Generated by Django 3.0.6 on 2020-05-20 21:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0014_auto_20200508_2201'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserActivationToken',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('expire', models.DateTimeField()),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('used', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
