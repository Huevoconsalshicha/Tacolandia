from django.contrib import admin
from .models import Pedido



class RegistroPedido(admin.ModelAdmin):
    list_display = ( 'id_pedido', 'fecha', 'estado')
    list_filter = ('id_pedido', 'fecha')
admin.site.register(Pedido, RegistroPedido)

