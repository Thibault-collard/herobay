"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
"""

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .api.views import *

router = routers.DefaultRouter()

urlpatterns = [

    # http://localhost:8000/
    path('api/all_heroes', get_data_heroes),
    path('api', include(router.urls)),
    path('', index_view, name='index'),
    # http://localhost:8000/api/admin/
    path('api/admin/', admin.site.urls),
]


