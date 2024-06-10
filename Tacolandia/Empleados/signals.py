#from django.contrib.auth.models import Group
#from django.db.models.signals import post_save
#from django.dispatch import receiver
#from core.models import  Promedio, RegistroClase


#@receiver(post_save, sender=RegistroClase)
#def iniciarPromedio(sender, instance, created, **kwargs):
#    print("Se ha llamado a iniciarPromedio")
#    if created:
#        print("esta crandoseolhnweafo")
#        print("instance.curso.class quantity", instance.curso.class_quantity)
#        registration = Promedio.objects.create(
#            curso=instance.curso,
#            estudiante=instance.estudiante,
#            numero_clases=instance.curso.class_quantity,
#            numero_pasadas=0,
#            numero_intentos=0,
#            promedio=None
#        )
#        Promedio.save_user_promedio(registration)
