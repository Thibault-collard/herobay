""" Production Settings """

import os
import dj_database_url
from .dev import *

############
# SECURITY #
############

DEBUG = bool(os.environ.get('DJANGO_DEBUG', ''))

SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', SECRET_KEY)
DB_NAME = os.environ.get('DJANGO_DB_NAME')
DB_HOST = os.environ.get('DJANGO_DB_HOST')
DB_MECH = os.environ.get('DJANGO_DB_MECH')
DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'CLIENT': {
            "host": DB_NAME,
            "name": DB_HOST,
            'authMechanism': DB_MECH
        }
    }
}
# Set to your Domain here (eg. 'django-vue-template-demo.herokuapp.com')
ALLOWED_HOSTS = ['herobay.herokuapp.com', 'localhost']

