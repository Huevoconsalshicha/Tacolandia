from django.db import models

class ProductosInventario(models.Model):
    id_producto = models.IntegerField(blank=True, null=True, verbose_name='ID Producto')
    id_proveedor = models.IntegerField(blank=True, null=True, verbose_name='ID Proveedor')
    nombre = models.CharField(max_length=90, verbose_name='Nombre')
    cantidad_en_stock = models.DecimalField(max_digits=10, decimal_places=3,default=0, verbose_name='Cantidad en Stock')
    precio_unitario = models.DecimalField(max_digits=10, decimal_places=3, default=0.00, verbose_name='Precio Unitario')
    fecha_ingreso = models.CharField(max_length=90, verbose_name='Fecha de Ingreso',default=" ")
    imagen = models.ImageField(upload_to='productos/', blank=True, null=True, verbose_name='Imagen del Producto')

    class Meta:
        verbose_name = 'Producto en Inventario'
        verbose_name_plural = 'Productos en Inventario'

    def __str__(self):
        return self.nombre


#FALTA HACER EL DE LOS produtos de inventario y cambiar este a la app Proveedores