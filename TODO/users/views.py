from django.shortcuts import render
from rest_framework import mixins, viewsets

from rest_framework.viewsets import ModelViewSet

from .models import User
from .serializers import UserModelSerializers

class UserModelViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin,
                        mixins.UpdateModelMixin, viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializers


