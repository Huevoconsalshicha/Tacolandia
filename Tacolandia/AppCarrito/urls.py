from django.urls import path
from django.contrib.auth import login, logout
from . import views


urlpatterns = [
    path('', views.tienda, name="Tienda"),
    path('cosas/', views.cargarProductos, name="cosas"),
    path('agregar/<int:producto_id>/', views.agregar_producto, name="Add"),
    path('eliminar/<int:producto_id>/', views.eliminar_producto, name="Del"),
    path('restar/<int:producto_id>/', views.restar_producto, name="Sub"),
    path('limpiar/', views.limpiar_carrito, name="CLS"),
    path('pedido/', views.pedido, name="pedido"),
]
