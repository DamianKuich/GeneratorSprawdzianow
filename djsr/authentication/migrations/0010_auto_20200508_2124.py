# Generated by Django 3.0.5 on 2020-05-08 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0009_task_typ'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='typ',
            field=models.CharField(default='cos', max_length=50),
            preserve_default=False,
        ),
    ]
