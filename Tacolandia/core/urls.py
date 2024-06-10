from django.urls import path
from django.contrib.auth import login, logout
from . import views


urlpatterns = [
     path('', views.inicio, name='inicio'),
     path('inicio/', views.inicio, name='inicio'),
     path('cuadros1/', views.cuadros1, name='cuadros1'),
     path('cuadros2/', views.cuadros2, name='cuadros2'),
     path('logout/', views.exit, name='exit'),
]
