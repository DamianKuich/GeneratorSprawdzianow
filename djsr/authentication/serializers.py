from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import CustomUser, Task, Dział, Umiejętność


class CustomUserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(
        required=True
    )
    username = serializers.CharField()
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = CustomUser
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)  # as long as the fields are the same, we can just use this
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = ('id','add_date','text','typ','author','level')

class DziałSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dział
        fields = ('nazwa_dzialu')

class UmiejetnośćSerializer(serializers.ModelSerializer):

    class Meta:
        model = Umiejętność
        fields = ('nazwa_umiejetności')
