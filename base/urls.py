from django.contrib import admin
from django.urls import path,include
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView


urlpatterns = [
   path('products',views.products_view.as_view()),
   path('products/<pk>',views.products_view.as_view()),
   path('login', TokenObtainPairView.as_view()),
   path('checkout', views.cart.as_view()),
   path('test', views.test),
]


