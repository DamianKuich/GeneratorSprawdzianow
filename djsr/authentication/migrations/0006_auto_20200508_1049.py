# Generated by Django 3.0.5 on 2020-05-08 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0005_auto_20200507_2150'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dział',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nazwa', models.CharField(max_length=500)),
            ],
        ),
        migrations.RenameModel(
            old_name='Tasks',
            new_name='Task',
        ),
    ]
