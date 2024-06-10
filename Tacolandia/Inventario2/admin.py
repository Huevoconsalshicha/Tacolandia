from django.contrib import admin
from .models import ProductosInventario

# Register your models here.


class RegistroInventario(admin.ModelAdmin):
    list_display = ( 'nombre', 'id_proveedor', 'id_producto', 'cantidad_en_stock')
    list_filter = ( 'nombre', 'id_proveedor', 'id_producto', 'cantidad_en_stock')
admin.site.register(ProductosInventario, RegistroInventario)
