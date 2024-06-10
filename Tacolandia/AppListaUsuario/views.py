from django.shortcuts import render, HttpResponse, redirect
from django.template import loader
import json
import datetime

# Create your views here.
from AppCarrito.Carrito import Carrito
from AppCarrito.models import ProductoVenta, Productos, Pedido
from Empleados.models import Profile
from Empleados.views import grupo


def eliminar(request):
    try:
        usuario_id = request.GET['idJson']
        usuario_id = int(usuario_id.strip('"'))
        
        print(usuario_id, "este es el usuario_id")
        usuarios = Profile.objects.select_related('usuario').filter(id=usuario_id)


        # Obtener los productos asociados al pedido
        #productos = pedido.productos.all()
        # Serializar el objeto Pedido a formato JSON
        #print("pedidoooooooooooooooo",pedido)
        #print("productosssssssssssss", productos)
        listaProductos = []

        for usuario in usuarios:

            pedido_json = {
                'id_pedido': usuario.id,
                'nombre': usuario.nombre,
                # Agrega otros campos aquí
            }
            listaProductos.append(pedido_json)
        print("pedidoJSON       ",listaProductos)
        return JsonResponse({'pedido': listaProductos})
    except Profile.DoesNotExist:
        return JsonResponse({'error': 'El pedido no existe'}, status=404)



def AppListaUsuario(request):
    usuarios = Profile.objects.select_related('usuario').all()
    user = request.user
    group_name = grupo(user)

    # Obtener los nombres y teléfonos de todos los perfiles
    lista_usuarios = []
    for usuario in usuarios:
        idUsuario = usuario.usuario.id
        nombre = usuario.usuario.get_full_name()
        telefono = usuario.telefono
        lista_usuarios.append({
            'id': idUsuario,
            'nombre': nombre,
            'telefono': telefono,
        })

    datos = {
        'group_name': group_name,
        'users': lista_usuarios,
    }
    print(lista_usuarios)
    if(group_name == 'estudiantes'):
        template = loader.get_template('vistaListaUsuario.html')
    else:
        #template = loader.get_template('members/cuadros2.html')
        template = loader.get_template('vistaListaUsuario.html')
    return HttpResponse(template.render(datos, request))

