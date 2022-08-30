from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer

from .models import User

class UserModelSerializers(ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email')

class UserCustomSerializers(ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'is_superuser', 'is_staff')
