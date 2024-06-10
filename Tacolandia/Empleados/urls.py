from django.urls import path
from django.contrib.auth import login, logout
from . import views


urlpatterns = [
     path('registro1/', views.registro_grupo_1, name='registro1'),
     path('Login/', views.Login, name='loginBueno'),
]
