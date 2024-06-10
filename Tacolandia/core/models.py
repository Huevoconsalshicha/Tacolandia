from django.db import models
from django.db.models.signals import  post_save, post_delete
from django.contrib.auth.models import User
from django.dispatch import  receiver
from django.contrib.auth.models import Group
# Create your models here.

class Pedido (models.Model):
    ESTADOS_CHOICES = (
        ('en_proceso', 'En proceso'),
        ('finalizado', 'Finalizado')
    )
    Tipo_Pedido = (
        ('Delivery', 'Delivery'),
        ('Comedor', 'Comedor'),
        ('Llevar', 'Llevar')
    )

    id_pedido = models.IntegerField(default=0, verbose_name='id_pedido')
    fecha = models.DateTimeField(blank=True, null=True,verbose_name='Fecha')
    estado = models.CharField(max_length=20, choices=ESTADOS_CHOICES, default='en_proceso', verbose_name='Estado')
    id_cliente = models.IntegerField(default=0, verbose_name='Id cliente')
    precio_total = models.PositiveBigIntegerField(default=0, verbose_name='Precio Total')
    tipo = models.CharField(max_length=20, choices=ESTADOS_CHOICES, default='Comedor', verbose_name='Tipo')

    def __str__(self):
        return self.name
    
    class Meta: 
        verbose_name='Pedido-Tacos'
        verbose_name_plural = 'Pedidos'




