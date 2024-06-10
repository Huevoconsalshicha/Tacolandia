from django.db import models

# Create your models here.
class ProductoVenta(models.Model):
    id_producto = models.IntegerField(blank=True, null=True)
    nombre = models.CharField(max_length=64)
    categoria = models.CharField(max_length=32)
    precio = models.IntegerField()

    def __str__(self):
        return f'{self.nombre} -> {self.precio}'
    




class Pedido(models.Model):
    # Otros campos de pedido
    id_pedido = models.AutoField(primary_key=True)
    # Otros campos de pedido

class Productos(models.Model):
    ESTADOS_CHOICES = (
        ('en_proceso', 'En proceso'),
        ('finalizado', 'Finalizado')
    )
    Tipo_Pedido = (
        ('Delivery', 'Delivery'),
        ('Comedor', 'Comedor'),
        ('Llevar', 'Llevar')
    )

    id_pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE, related_name='productos', null=True)
    tipo = models.CharField(blank=True, null=True, max_length=20, choices=Tipo_Pedido,default='Comedor', verbose_name='Tipo')
    estado = models.CharField(max_length=20, choices=ESTADOS_CHOICES, default='en_proceso', verbose_name='Estado', blank=True, null=True)
    nombre = models.CharField(max_length=90, verbose_name='Nombre')
    cantidad = models.PositiveBigIntegerField(default=0, verbose_name='Cantidad')
    precio_unitario = models.PositiveBigIntegerField(default=0, verbose_name='Precio Unitario')
    fecha = models.DateTimeField(blank=True, null=True, verbose_name='Fecha')
    precio_total = models.PositiveBigIntegerField(default=0, verbose_name='Precio Total')

    def __str__(self):
        return self.nombre

    class Meta: 
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'




