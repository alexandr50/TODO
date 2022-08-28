from rest_framework import serializers
from rest_framework.relations import StringRelatedField, SlugRelatedField
from rest_framework.serializers import ModelSerializer

from users.models import User
from .models import Project, Todo

class ProjectSerializer(ModelSerializer):

    # users = SlugRelatedField(many=True,queryset=User.objects.all(), slug_field='username')

    class Meta:
        model = Project
        fields = ('name', 'link')

class TodoSerializer(ModelSerializer):

    # project= SlugRelatedField(queryset=Project.objects.all(), slug_field='name')
    # person = SlugRelatedField(queryset=User.objects.all(), slug_field='username')

    class Meta:
        model = Todo
        fields = '__all__'
