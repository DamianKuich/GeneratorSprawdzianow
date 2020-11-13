"""
Django settings for djsr project.

Generated by 'django-admin startproject' using Django 3.0.5.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
from datetime import timedelta
import os
import django_heroku
SETTINGS_PATH = os.path.dirname(os.path.dirname(__file__))
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'fx(nagh1&-mk0*!!41(d8$jdo6^k=k@^1n0f7_jbvl12rk065i'
RS256_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n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\n-----END RSA PRIVATE KEY-----"
RS256_PUBLIC_KEY="-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAqlpe2Y4tV3bWXUEg+Rd3\ndR2k3XhEMt/ymRFr6Se1o5IgFyRpotI8ZIBoonvSV+WnM7E5ZNGc9UMVrphJ2h5d\n/LML214TmHOw8qfEJ0eu83JCSjszw+/DPxG9wIPwsG1EhcWnjhEJNId9SKhFgG+5\nidwwryXwO1u8x5wcYZ36OGXtxJGjkfKuZSWCKRceP9VWWK1CfOLJDAZM4lpSyzAd\nAWvo/Ip6tJrh62rpqLlZOkzjqa5ugQIWcyZsDeXif4y3CfLVgB9rfl4T9uOp/JZG\nP7s5iyDp8nDYadBjLweSlMPStkKm0GXasu85XG9PFpDZ378Noyttq/GqRHoLUC1V\nbxzg2Du8WIbQYKkZSbEEdFxFRBOuwZ+YtSmLCC/3HSYIvXhNTcB2QtttXTd2aX2+\nkDRUuM/4V5joeHVY7BmGGVR5jUozp9BI4C29qpL9bJWYv/Gz2ZZ3dBdUQ7fY+mpx\nJ2iuZo3X2P7khh9E3H/bnZzakevSiFTPmOHF9lHKxxM7VAkTOn818Oryx1KRaAXB\nRSqYDAxivmUsoq8c8UJXtWdxTF5QC7woVbedZ9Tp8QUAtPT6PPafYigXc16ReLkc\na25CDWquV3d61wZDeDQF+DSDMZC76AcZLPAP6/YEA17rje5et34iyDWwl0E4rSl6\n/KWePmYVigtrHU2eg1uKcmcCAwEAAQ==\n-----END PUBLIC KEY-----"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['gen-mat.herokuapp.com']

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'authentication',
    'rest_framework',
    'frontend',
    'rest_framework_simplejwt.token_blacklist',
    'six',
    'rest_framework_simplejwt',
]
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
    ),
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=5),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=14),
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': True,
    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUTH_HEADER_TYPES': ('JWT',),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',
    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',
}

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'djsr.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'djsr.wsgi.application'

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'genespr',
        'USER': 'root',
        'PASSWORD': 'ziomalek1998',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}

import dj_database_url
db_from_env = dj_database_url.config()
DATABASES['default'].update(db_from_env)

# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Poland'

USE_I18N = True

USE_L10N = True

USE_TZ = False


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [
os.path.join(BASE_DIR, 'frontend/static/'),
    os.path.join(BASE_DIR, 'frontend/templates/'),
]
MEDIA_URL = '/media/'
MEDIA_ROOT = 'media'
AUTH_USER_MODEL = "authentication.CustomUser"


EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'sprgenmat@gmail.com'
EMAIL_HOST_PASSWORD = 'tgbgehrnudqdbbcg'
EMAIL_PORT = 587

ADMINS = [('Damian', 'sprgenmat@gmail.com')]
MANAGERS = ADMINS

# Activate Django-Heroku.
django_heroku.settings(locals())
