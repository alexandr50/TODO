from django_filters import rest_framework as filters, IsoDateTimeFilter
from django_filters.widgets import RangeWidget

from .models import Project, Todo


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']


class TodoFilter(filters.FilterSet):
    created_at = filters.DateFromToRangeFilter(widget=RangeWidget(attrs={'type': 'date'}))

    class Meta:
        model = Todo
        fields = ['project', 'created_at']


