import ssl
import certifi
from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.cache import never_cache
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import Heroes, HeroesSerializer

index_view = never_cache(TemplateView.as_view(template_name='index.html'))

@csrf_exempt

def get_data_heroes(request,id=0):
    
    if request.method == 'GET':
        heroes = Heroes.objects.all()
        heroes_serializer=HeroesSerializer(heroes,many=True)
        return JsonResponse(heroes_serializer.data,safe=False)

    elif request.method == 'POST':
        heroes_data = JSONParser().parse(request)
        heroes_serializer=HeroesSerializer(data=heroes_data)
        if heroes_serializer.is_valid():
            heroes_serializer.save()
            return JsonResponse("Hero added to database",safe=False)
        return JsonResponse("Failed to add",safe=False)
    elif request.method == 'PUT':
        heroes_data = JSONParser().parse(request)
        heroes=Heroes.objects.get(HeroesId=heroes_data['HeroesId'])
        heroes_serializer=HeroesSerializer(heroes, data=heroes_data)
        if heroes_serializer.is_valid():
            heroes_serializer.save()
            return JsonResponse("Hero added to database",safe=False)
        return JsonResponse("Failed to update",safe=False)
    elif request.method == 'DELETE':
        heroes=Heroes.objects.get(HeroesId=id)
        heroes.delete()
        return JsonResponse('Deleted Succesfully',safe=False)