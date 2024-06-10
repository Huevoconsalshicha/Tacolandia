from django.shortcuts import render

from django.http import HttpResponse,  HttpResponseRedirect
from django.urls import reverse
from django.template import loader
from django.contrib.auth import logout, login, authenticate
from django.conf import settings
from Empleados.views import grupo



# Create your views here.


def exit(request):
    logout(request)
    return HttpResponseRedirect(reverse('loginBueno'))




def inicio(request): 
    enrolled_courses = []
    enrolled_calificaciones = []
    user = request.user
    group_name=grupo(user)
    print(user)
    print(group_name)
    datos = {
        'group_name': group_name,
        'enrolled_courses' : enrolled_courses,
        'enrolled_calificaciones' : enrolled_calificaciones,
    }
    if(group_name == 'estudiantes'):
        template = loader.get_template('members/inicio.html')
    else:
        template = loader.get_template('members/inicio.html')
    return HttpResponse(template.render(datos, request))




def cuadros1(request):
    template = loader.get_template('members/cuadros1.html')
    enrolled_courses = []
    enrolled_calificaciones = []
    user = request.user
    group_name='estudiantes'
    datos = {
        'group_name': group_name,
        'enrolled_courses' : enrolled_courses,
        'enrolled_calificaciones' : enrolled_calificaciones,
    }
    if(group_name == 'estudiantes'):
        template = loader.get_template('members/cuadros1.html')
    else:
        template = loader.get_template('members/cuadros1.html')
    return HttpResponse(template.render(datos, request))


def cuadros2(request):
    template = loader.get_template('members/cuadros2.html')
    enrolled_courses = []
    enrolled_calificaciones = []
    user = request.user
    group_name='estudiantes'
    datos = {
        'group_name': group_name,
        'enrolled_courses' : enrolled_courses,
        'enrolled_calificaciones' : enrolled_calificaciones,
    }
    if(group_name == 'estudiantes'):
        template = loader.get_template('tienda.html')
    else:
        #template = loader.get_template('members/cuadros2.html')
        template = loader.get_template('tienda.html')
    return HttpResponse(template.render(datos, request))

