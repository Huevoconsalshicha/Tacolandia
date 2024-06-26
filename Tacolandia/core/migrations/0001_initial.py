# Generated by Django 5.0.3 on 2024-04-15 17:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pedido',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_pedido', models.IntegerField(default=0, verbose_name='id_pedido')),
                ('fecha', models.DateTimeField(blank=True, null=True, verbose_name='Fecha')),
                ('estado', models.CharField(choices=[('en_proceso', 'En proceso'), ('finalizado', 'Finalizado')], default='en_proceso', max_length=20, verbose_name='Estado')),
                ('id_cliente', models.IntegerField(default=0, verbose_name='Id cliente')),
                ('precio_total', models.PositiveBigIntegerField(default=0, verbose_name='Precio Total')),
                ('tipo', models.CharField(choices=[('en_proceso', 'En proceso'), ('finalizado', 'Finalizado')], default='Comedor', max_length=20, verbose_name='Tipo')),
            ],
            options={
                'verbose_name': 'Pedido-Tacos',
                'verbose_name_plural': 'Pedidos',
            },
        ),
    ]
