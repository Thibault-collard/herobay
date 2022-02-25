"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
"""

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from .api.views import get_data_heroes

router = routers.DefaultRouter()

urlpatterns = [

    path('', get_data_heroes),

    # http://localhost:8000/api/admin/
    path('api/admin/', admin.site.urls),
]


