"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
"""

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from .api.views import get_data_heroes
from django.views.generic import TemplateView
router = routers.DefaultRouter()

urlpatterns = [

    # http://localhost:8000/
    path('api/all_heroes', get_data_heroes),

    path('api', include(router.urls)),
    path('', TemplateView.as_view(template_name="index.html")),
    # http://localhost:8000/api/admin/
    path('api/admin/', admin.site.urls),
]


