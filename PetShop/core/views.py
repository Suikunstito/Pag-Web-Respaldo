from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'core/index.html')

def registro(request):
    return render(request, 'core/registro.html')

def administracion(request):
    return render(request, 'core/administracion.html')

def nosotros(request):
    return render(request, 'core/nosotros.html')

def bodega(request):
    return render(request, 'core/bodega.html')

def boleta(request):
    return render(request, 'core/boleta.html')

def carrito(request):
    return render(request, 'core/carrito.html')

def ficha(request):
    return render(request, 'core/ficha.html')

def ingresar(request):
    return render(request, 'core/ingresar.html')

def miscompras(request):
    return render(request, 'core/miscompras.html')

def misdatos(request):
    return render(request, 'core/misdatos.html')

def productos(request):
    return render(request, 'core/productos.html')

def ropa(request):
    return render(request, 'core/ropa.html')

def usuarios(request):
    return render(request, 'core/usuarios.html')

def ventas(request):
    return render(request, 'core/ventas.html')