from rest_framework.routers import DefaultRouter
from products.api.urls import product_router
from carts.api.urls import cart_router
from django.urls import path, include

router = DefaultRouter()
# products
router.registry.extend(product_router.registry)

#cart
#router.registry.extend(cart_router.registry)

urlpatterns = [
    path('', include(router.urls)),
    path('cart/', include(cart_router.urls)),
]