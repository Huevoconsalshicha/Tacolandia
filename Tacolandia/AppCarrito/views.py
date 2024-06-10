from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse
from django.template import loader
from django import template
import json
import datetime

# Create your views here.
from AppCarrito.Carrito import Carrito
from AppCarrito.models import ProductoVenta, Productos, Pedido
from Empleados.views import grupo


def tienda(request):
    #return HttpResponse("Hola Pythonizando")
    productos = ProductoVenta.objects.all()
    user = request.user
    group_name=grupo(user)
    datos = {
        'group_name': group_name,
        'productos' : productos,
    }
    if(group_name == 'estudiantes'):
        template = loader.get_template('Tienda.html')
    else:
        #template = loader.get_template('members/cuadros2.html')
        template = loader.get_template('pedirTacos.html')
    return HttpResponse(template.render(datos, request))


def cargarProductos(request):
    #return HttpResponse("Hola Pythonizando")
    productos = ProductoVenta.objects.all()
    # Convertir los datos de los productos a una lista de diccionarios
    productos_json = list(productos.values())

    # Retornar los datos como una respuesta JSON
    return JsonResponse({'productos': productos_json})




def pedido(request):

    print("entro al pedido")
    user = request.user
    group_name = grupo(user)
    datos = {
        'group_name': group_name,
        'pedidos': Pedido.objects.all(),
    }
    if group_name == 'mesero':
        template = loader.get_template('tienda.html')
    else:
        template = loader.get_template('pedido.html')
        
    if request.method == 'POST':

        print("se metio al possssssssssssssssssssssssttttttttttt")
         # Obtener el cuerpo de la solicitud JSON
        print("Cuerpo de la solicitud:", request.body.decode('utf-8'))

        body_unicode = request.body.decode('utf-8')
        datosPedidosJSON = json.loads(body_unicode)

        if datosPedidosJSON:
            # Decodificar la cadena JSON a un diccionario de Python
            
            # Crear un nuevo pedido
            pedido_nuevo = Pedido.objects.create()
            
            # Crear una lista de instancias de Productos asociadas al pedido nuevo
            productos_nuevos = []
            total=0
            for item in datosPedidosJSON:
                nombre_producto = item['name']
                cantidad_producto = item['quantity']
                precio_unitario_producto = item['price']
                fechaHoy = datetime.datetime.now()
                total= total+ (precio_unitario_producto * cantidad_producto)
                
                # Crear una instancia de Productos asociada al pedido recién creado
                producto_nuevo = Productos(
                    id_pedido=pedido_nuevo,
                    nombre=nombre_producto,
                    cantidad=cantidad_producto,
                    precio_unitario=precio_unitario_producto,
                    fecha=fechaHoy,
                    precio_total=total,
                )
                print("total", total)
                productos_nuevos.append(producto_nuevo)
                
            # Guardar todas las instancias de Productos en la base de datos de una vez
            Productos.objects.bulk_create(productos_nuevos)
        
    else:
        print("No se ha enviado ninguna solicitud POST")
        
    return HttpResponse(template.render(datos, request))




def agregar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = ProductoVenta.objects.get(id=producto_id)
    carrito.agregar(producto)
    return redirect("Tienda")

def eliminar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = ProductoVenta.objects.get(id=producto_id)
    carrito.eliminar(producto)
    return redirect("Tienda")

def restar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = ProductoVenta.objects.get(id=producto_id)
    carrito.restar(producto)
    return redirect("Tienda")

def limpiar_carrito(request):
    carrito = Carrito(request)
    carrito.limpiar()
    return redirect("Tienda")