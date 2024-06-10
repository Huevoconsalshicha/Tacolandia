
from django.shortcuts import render, HttpResponse, redirect
from django.template import loader
from django.template.loader import render_to_string
from django.http import JsonResponse
from django.core import serializers
import json
import datetime

# Create your views here.
from AppCarrito.Carrito import Carrito
from AppCarrito.models import ProductoVenta, Productos, Pedido
from Empleados.views import grupo


def AppHistorialPedidos(request):
    #return HttpResponse("Hola Pythonizando")
    #productos = ProductoVenta.objects.all()
    user = request.user
    group_name=grupo(user)

    datos = {
        'group_name': group_name,
        'pedidos': Pedido.objects.all(),
    }
    if(group_name == 'estudiantes'):
        template = loader.get_template('vistaHistorial.html')
    else:
        #template = loader.get_template('members/cuadros2.html')
        template = loader.get_template('vistaHistorial.html')
    return HttpResponse(template.render(datos, request))


def DetallesPedido(request):
    #
    try:
        pedido_id = request.GET['id_seleccionado']
        pedido_id = int(pedido_id.strip('"'))
        
        print(pedido_id, "este es el pedido_id")
        pedido = Pedido.objects.get(id_pedido=pedido_id)


        # Obtener los productos asociados al pedido
        productos = pedido.productos.all()
        # Serializar el objeto Pedido a formato JSON
        #print("pedidoooooooooooooooo",pedido)
        #print("productosssssssssssss", productos)
        listaProductos = []

        for producto in productos:
            fecha = producto.fecha.strftime('%Y-%m-%d %H:%M:%S')

            pedido_json = {
                'id_pedido': pedido.id_pedido,
                'fecha': fecha,
                'nombre': producto.nombre,
                'cantidad': producto.cantidad,
                'total': producto.precio_total
                # Agrega otros campos aquí
            }
            listaProductos.append(pedido_json)
        print("pedidoJSON       ",listaProductos)
        return JsonResponse({'pedido': listaProductos})
    except Pedido.DoesNotExist:
        return JsonResponse({'error': 'El pedido no existe'}, status=404)


