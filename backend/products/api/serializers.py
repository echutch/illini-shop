from rest_framework.serializers import ModelSerializer, ReadOnlyField, EmailField, CharField
from ..models import Product
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'stock', 'description')


class RegisterSerializer(ModelSerializer):
    email = EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    password = CharField(write_only=True)
    first_name = CharField(required=True)
    last_name = CharField(required=True)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'password']

        