from rest_framework.serializers import ModelSerializer, ReadOnlyField, EmailField, CharField
from ..models import Cart, CartItem
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from products.api.serializers import ProductSerializer

class CartItemSerializer(ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = CartItem
        fields = ['id', 'product', 'quantity', 'total_price']
        read_only_fields = ['total_price']


class CartSerializer(ModelSerializer):
    cartitems = CartItemSerializer(many=True, read_only=True)
    total_price = ReadOnlyField()

    class Meta:
        model = Cart
        fields = ['id', 'user', 'cartitems', 'total_price']
        read_only_fields = ['user', 'total_price']