from django.shortcuts import render, redirect
from django.http import HttpResponse,  HttpResponseRedirect
from django.urls import reverse
from django.template import loader
from django.contrib.auth.models import Group
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout, login, authenticate
from django.contrib import messages
from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings
from django.db.models import Q
from .forms import RegisterForm, UserCreationForm, LoginFormForm
from .models import Profile
#from core.models import Curso, RegistroClase, Promedio

# Create your views here.


def Login(request):
    template = loader.get_template('registration/login.html')

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        print(username, "username")
        print(password, "password")

        # Autenticar al usuario
        user = authenticate(request, username=username, password=password)
        print("uso el autenticar usuario: ", user)

        if user is not None:
            print("paso dentro del user")
            if user.is_active:
                # Iniciar sesión
                
                template = loader.get_template('principal/inicio.html')
                
                login(request, user)
                user = request.user
                group_name=grupo(user)
                print(user)
                print(group_name)

                datos = {
                    'group_name': group_name,
                }
                return HttpResponse(template.render(datos, request))
                #return HttpResponseRedirect(settings.LOGIN_REDIRECT_URL) # Cambia 'members:suma' a la URL deseada
            else:
                print("Cuenta desactivada.")
        else:
            print("Credenciales inválidas.")
    
    return HttpResponse(template.render(request=request))





def grupo(user):
    if user.is_authenticated:
        group = Group.objects.filter(user=user).first()
        if group:
            group_name=group.name
            return group_name



def registro_grupo_1(request):
    print("inicio del código")
    template = loader.get_template('registration/register.html')
    user = request.user

    print("A VER QUE ESTA PASANDO AQUI ",  request.POST)
    group_name=None
    group_name='taquero'  
    datos = {
        'form': RegisterForm(),
        'group_name': group_name
    }

    if request.method == 'POST': 
        user_creation_form = RegisterForm(data=request.POST)  

        if user_creation_form.is_valid():
            rol = request.POST.get('rol')
            if(rol == 'taquero'):
                try:
                    mi_grupo = Group.objects.get(name='taquero')
                    print("try no se creo nada")
                except Group.DoesNotExist:
                    print("catch")
                    mi_grupo = Group.objects.create(name='taquero')
            elif(rol == 'mesero'):
                try:
                    mi_grupo = Group.objects.get(name='mesero')
                    print("try no se creo nada")
                except Group.DoesNotExist:
                    print("catch")
                    mi_grupo = Group.objects.create(name='mesero')
            elif(rol == 'cajero'):
                try:
                    mi_grupo = Group.objects.get(name='cajero')
                    print("try no se creo nada")
                except Group.DoesNotExist:
                    print("catch")
                    mi_grupo = Group.objects.create(name='cajero')

            user = user_creation_form.save()  # Guarda el objeto User

            # Crear el perfil y asignar el usuario al grupo deseado
            profile = Profile.objects.create(usuario=user)  # Crea el perfil utilizando el objeto User
            profile.usuario.groups.add(mi_grupo)

            template = loader.get_template('principal/inicio.html')

            return HttpResponse(template.render(datos, request))
        else:
            print(user_creation_form.errors)
            print("Formulario no válido")
    return HttpResponse(template.render(datos, request))





