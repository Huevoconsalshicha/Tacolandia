from django.urls import path
from django.contrib.auth import login, logout
from . import views


urlpatterns = [
    path('', views.AppHistorialPedidos, name="historial_pedidos"),
    path('detalles_pedido/', views.DetallesPedido, name="detalles_pedido"),
    
]
