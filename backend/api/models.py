from django.db import models
from rest_framework import serializers

class Heroes(models.Model):
    superhero = models.CharField(max_length=200)
    publisher = models.TextField()
    alter_ego = models.TextField()
    first_appearance = models.TextField()
    characters = models.TextField()
    price = models.TextField()
    
class HeroesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Heroes
        fields = ('superhero', 'publisher',"alter_ego","first_appearance","characters","price")
