from django.shortcuts import render, HttpResponse, redirect
from django.template import loader
import json
import datetime

# Create your views here.
from AppCarrito.Carrito import Carrito
from AppCarrito.models import ProductoVenta, Productos, Pedido
from Empleados.views import grupo


def AppListaUsuario(request):
    #return HttpResponse("Hola Pythonizando")
    productos = ProductoVenta.objects.all()
    user = request.user
    group_name=grupo(user)
    datos = {
        'group_name': group_name,
        'pedidos': Pedido.objects.all(),
    }
    if(group_name == 'estudiantes'):
        template = loader.get_template('vistaListaUsuario.html')
    else:
        #template = loader.get_template('members/cuadros2.html')
        template = loader.get_template('vistaListaUsuario.html')
    return HttpResponse(template.render(datos, request))

