from django.apps import AppConfig


class EmpleadosConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'Empleados'
    verbose_name = 'empleados'

    def ready(self):
        import Empleados.signals
