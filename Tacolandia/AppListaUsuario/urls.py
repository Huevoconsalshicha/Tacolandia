from django.urls import path
from django.contrib.auth import login, logout
from . import views


urlpatterns = [
    path('', views.AppListaUsuario, name="lista_usuarios"),
]
