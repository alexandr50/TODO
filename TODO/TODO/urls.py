from django.contrib import admin
from rest_framework import permissions
from rest_framework.authtoken import views
from rest_framework.routers import DefaultRouter
from django.urls import path, include
from users.views import UserModelViewSet
from project.views import ProjectModelViewSet, TodoCustomViewSet
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

shema_view = get_schema_view(
    openapi.Info(
        title='TODO',
        default_version='0.1',
        description='Documentation of our project',
        contact=openapi.Contact(email='admin@mail.ru'),
        license=openapi.License(name='License')
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

router = DefaultRouter()
router.register('users', UserModelViewSet, basename='users')
router.register('project', ProjectModelViewSet, basename='prooject')
router.register('todo', TodoCustomViewSet, basename='todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('api-token-auth/', views.obtain_auth_token),
    path('swagger<str:format>/', shema_view.without_ui()),
    path('swagger/', shema_view.with_ui('swagger')),
    path('redoc/', shema_view.with_ui('redoc')),

]
