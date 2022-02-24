""" Production Settings """

import os
import dj_database_url
from .dev import *

############
# SECURITY #
############

DEBUG = bool(os.getenv('DJANGO_DEBUG', ''))

SECRET_KEY = os.getenv('DJANGO_SECRET_KEY', SECRET_KEY)

# Set to your Domain here (eg. 'django-vue-template-demo.herokuapp.com')
ALLOWED_HOSTS = ['django-vue-template.herokuapp.com', 'localhost']

