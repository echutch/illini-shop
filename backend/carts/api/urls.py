from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import CartViewSet, CartItemViewSet

cart_router = DefaultRouter()
cart_router.register(r'cart', CartViewSet, basename='cart')
cart_router.register(r'cart-items', CartItemViewSet, basename='cart-item')