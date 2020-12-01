# Generated by Django 3.1.3 on 2020-12-01 19:20

import datetime
from django.conf import settings
import django.contrib.auth.models
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import django_mysql.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('fav_color', models.CharField(blank=True, max_length=120)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Answers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('wronganswers', django_mysql.models.ListCharField(models.CharField(max_length=200), default=None, max_length=1320, size=6)),
                ('correctans', django_mysql.models.ListCharField(models.CharField(max_length=200), default=None, max_length=1320, size=6)),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('user_id', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='PasswordSendReset',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
            ],
        ),
        migrations.CreateModel(
            name='Section',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Section', models.CharField(max_length=500, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Skill', models.CharField(max_length=500, unique=True)),
                ('section', models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.CASCADE, to='authentication.section')),
            ],
        ),
        migrations.CreateModel(
            name='TestJSON',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(null=True)),
                ('tasks', models.TextField(null=True)),
                ('created', models.DateField(default=datetime.date.today)),
                ('user_id', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='UserResetToken',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('expire', models.DateTimeField()),
                ('created_on', models.DateTimeField()),
                ('used', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='UserActivationToken',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('expire', models.DateTimeField()),
                ('created_on', models.DateTimeField()),
                ('used', models.BooleanField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(max_length=600, unique=True)),
                ('wronganswers', django_mysql.models.ListCharField(models.CharField(max_length=200), blank=True, default=None, max_length=1320, size=6)),
                ('correctans', django_mysql.models.ListCharField(models.CharField(max_length=200), blank=True, default=None, max_length=1320, size=6)),
                ('type', models.IntegerField(choices=[(1, 'Otwarte'), (3, 'Krótka odpowiedź'), (0, 'Nieznany'), (2, 'Zamknięte')])),
                ('level', models.IntegerField(choices=[(1, 'Podstawowy'), (2, 'Rozszerzony'), (0, 'Nieznany')])),
                ('private', models.BooleanField(default=False)),
                ('points', models.IntegerField(default=0)),
                ('answers', models.OneToOneField(blank=True, default='', on_delete=django.db.models.deletion.CASCADE, to='authentication.answers')),
                ('author', models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('image', models.ManyToManyField(blank=True, to='authentication.Image')),
                ('skill', models.ManyToManyField(to='authentication.Skill')),
            ],
        ),
        migrations.CreateModel(
            name='Sectionv2',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Section', models.CharField(max_length=500, unique=True)),
                ('skilll', models.ManyToManyField(blank=True, null=True, to='authentication.Skill')),
            ],
        ),
    ]
