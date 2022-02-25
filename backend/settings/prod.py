""" Production Settings """

import os
import dj_database_url
from .dev import *

############
# SECURITY #
############

DEBUG = bool(os.environ.get('DJANGO_DEBUG', ''))

SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', SECRET_KEY)
DB_NAME = 'herobay'
DB_HOST = os.environ.get('DJANGO_DB_HOST')
DB_MECH = os.environ.get('DJANGO_DB_MECH')
DB_USERNAME = os.environ.get('DJANGO_DB_USERNAME')
DB_PASSWORD = os.environ.get('DJANGO_DB_PASSWORD')

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'CLIENT': {
            "host": DB_NAME,
            "username": DB_USERNAME,
            "password":DB_PASSWORD,
            "name": DB_HOST,
            'authMechanism': DB_MECH
        }
    }
}
# Set to your Domain here (eg. 'django-vue-template-demo.herokuapp.com')
ALLOWED_HOSTS = ['herobay.herokuapp.com', 'localhost']

