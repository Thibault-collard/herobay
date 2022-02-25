""" Production Settings """

import os
import dj_database_url
from .dev import *

############
# SECURITY #
############

DEBUG = bool(os.getenv('DJANGO_DEBUG', ''))

SECRET_KEY = os.getenv('DJANGO_SECRET_KEY', SECRET_KEY)
DB_NAME = os.getenv('DJANGO_DB_NAME')
DB_HOST = os.getenv('DJANGO_DB_HOST')
DB_MECH = os.getenv('DJANGO_DB_MECH')
DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'CLIENT': {
            "host": DB_NAME,
            "name": DB_HOST,
            'authMechanism': "SCRAM-SHA-1"
        }
    }
}
# Set to your Domain here (eg. 'django-vue-template-demo.herokuapp.com')
ALLOWED_HOSTS = ['herobay.herokuapp.com', 'localhost']

