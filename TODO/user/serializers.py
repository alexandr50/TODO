from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer

from .models import User

class UserModelSerializers(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email')
