from django.contrib import admin
from .models import ProductoVenta, Productos, Pedido

admin.site.register(ProductoVenta)

class RegistroProductos(admin.ModelAdmin):
    list_display = ('nombre', 'cantidad', 'precio_unitario')
    list_filter = ('nombre', 'cantidad', 'precio_unitario')

admin.site.register(Productos, RegistroProductos)

class PedidoAdmin(admin.ModelAdmin):
    list_display = ('id_pedido', 'mostrar_productos')  # Definimos un método llamado mostrar_productos
    list_filter = ('id_pedido',)  # Filtrar por el campo id_pedido

    def mostrar_productos(self, obj):
        return ", ".join([producto.nombre for producto in obj.productos.all()])  # Mostrar los nombres de los productos separados por coma

    mostrar_productos.short_description = 'Productos'  # Nombre que se mostrará en el encabezado de la columna

admin.site.register(Pedido, PedidoAdmin)