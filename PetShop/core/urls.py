from django.urls import path
from .views import index, registro, administracion, nosotros, bodega, boleta, carrito, ficha, ingresar, miscompras, misdatos, productos, ropa, usuarios, ventas

urlpatterns = [
    path('', index, name="index"),
    path('administracion/', administracion, name='administracion'),
    path('bodega/', bodega, name="bodega"),
    path('boleta/', boleta, name="boleta"),
    path('carrito/', carrito, name="carrito"),
    path('ficha/', ficha, name="ficha"),
    path('ingresar/', ingresar, name="ingresar"),
    path('miscompras/', miscompras, name="miscompras"),
    path('misdatos/', misdatos, name="misdatos"),
    path('nosotros/', nosotros, name="nosotros"),
    path('productos/', productos, name="productos"),
    path('registro/', registro, name="registro"),
    path('ropa/', ropa, name="ropa"),
    path('usuarios/', usuarios, name="usuarios"),
    path('ventas/', ventas, name="ventas"),
]
