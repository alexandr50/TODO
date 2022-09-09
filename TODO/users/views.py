from django.shortcuts import render
from rest_framework import mixins, viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer

from rest_framework.viewsets import ModelViewSet

from .models import User
from .serializers import UserModelSerializers, UserCustomSerializers

class UserModelViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = User.objects.all()
    serializer_class = UserModelSerializers
    # permission_classes = [IsAuthenticated]

    # def get_serializer_class(self):
    #     if self.request.version == 'v1':
    #         return UserModelSerializers
    #     else:
    #         return UserCustomSerializers


