# Generated by Django 3.0.5 on 2020-05-07 18:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_tasks'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tasks',
            name='abcd',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='tasks',
            name='is_open',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='tasks',
            name='true_false',
            field=models.IntegerField(),
        ),
    ]
