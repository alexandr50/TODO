from django.shortcuts import render
from rest_framework import viewsets, mixins, status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from project.filters import ProjectFilter, TodoFilter
from project.models import Project, Todo
from project.serializer import ProjectSerializer, TodoSerializer


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10

class ProjectModelViewSet(viewsets.ModelViewSet):
    # renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    # pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter

    def get_queryset(self):
        name = self.request.query_params.get('name', None)
        queryset = Project.objects.all()
        if name:
            queryset = queryset.filter(name__contains=name)
        return queryset


class TodoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20

class TodoCustomViewSet(mixins.CreateModelMixin,mixins.RetrieveModelMixin,
                        mixins.ListModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    # pagination_class = TodoLimitOffsetPagination
    # filterset_class = TodoFilter

    def desrtoy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            instance.is_active = False
            instance.save()
        except:
            Response(status=status.HTTP_404_NOT_FOUND)
        else:
            Response(status=status.HTTP_204_NO_CONTENT)