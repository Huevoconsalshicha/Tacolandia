from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm ,UserCreationForm





class LoginFormForm(AuthenticationForm):
    pass
    # Tus campos personalizados aquí si los tienes




class RegisterForm(UserCreationForm): 
    rol_choices = [('mesero', 'Mesero'), ('taquero', 'Taquero'), ('cajero', 'Cajero')]
    rol = forms.ChoiceField(label='Rol', choices=rol_choices)


    class Meta(UserCreationForm.Meta):
        model = User
        fields = ['username', 'first_name', 'last_name', 'password1', 'password2', 'rol']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['password1'].widget = forms.PasswordInput(render_value=True)
        self.fields['password2'].required = False


        self.fields['username'].widget.attrs['autocomplete'] = 'off'
        self.fields['password1'].widget.attrs['autocomplete'] = 'off'