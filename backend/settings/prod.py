""" Production Settings """

import os
import dj_database_url
from .dev import *

############
# SECURITY #
############

DEBUG = bool(os.environ.get('DJANGO_DEBUG', ''))

SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', SECRET_KEY)
DJANGO_SECRET_KEY='verybadsecret!!!'

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'CLIENT': {
            "host": 'herobay',
            "name": 'mongodb+srv://admin:reims@cluster0.lb1h9.mongodb.net/herobay?retryWrites=true&w=majority',
            'authMechanism': 'SCRAM-SHA-1'
        }
    }
}
# Set to your Domain here (eg. 'django-vue-template-demo.herokuapp.com')
ALLOWED_HOSTS = ['herobay.herokuapp.com', 'localhost']

