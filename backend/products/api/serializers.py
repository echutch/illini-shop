from rest_framework.serializers import ModelSerializer, ReadOnlyField, EmailField, CharField
from ..models import Product
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'stock', 'description')




        