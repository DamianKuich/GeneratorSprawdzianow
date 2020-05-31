from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import CustomUser, Task, Section, Skill, PasswordSendReset, PasswordReset


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
        instance.is_active = False
        instance.save()
        return instance

class PasswordSendResetSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True
    )
    class Meta:
        model = PasswordSendReset
        fields = {'email'}

class PasswordResetSerializer(serializers.ModelSerializer):
    password_1 = serializers.CharField(min_length=8, write_only=True)
    password_2 = serializers.CharField(min_length=8, write_only=True)
    class Meta:
        model = PasswordSendReset
        fields = {'password_1', 'password_2'}


class CustomUserSerializerReadOnly(serializers.ModelSerializer):
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
        if CustomUser.objects.filter(email=validated_data.pop('email', None)).exists():
             raise (serializers.ValidationError('This email already exists'))
        if password is not None:
            instance.set_password(password)
        instance.is_active = False
        instance.save()
        return instance

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('id', 'Skill_name')

class SectionSerializer(serializers.ModelSerializer):
    skill = SkillSerializer(many=True)
    class Meta:
        model = Section
        fields = ('id','Section_name','skill')
class TaskSerializer(serializers.ModelSerializer):
    skill = SkillSerializer(many=True)
    class Meta:
        model = Task
        fields = ('id','text','add_date','typ','author','level','skill')



