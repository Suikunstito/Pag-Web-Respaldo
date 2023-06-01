// objeto.metodo(json)

$(document).ready(function() {

    // Agregar método de validación para RUT chileno
    $.validator.addMethod("rutChileno", function(value, element) {
      // Eliminar puntos y guión del RUT
      value = value.replace(/[.-]/g, "");
  
      // Validar que el RUT tenga 8 o 9 dígitos
      if (value.length < 8 || value.length > 9) {
        return false;
      }
  
      // Validar que el último dígito sea un número o una 'K'
      var validChars = "0123456789K";
      var lastChar = value.charAt(value.length - 1).toUpperCase();
      if (validChars.indexOf(lastChar) == -1) {
        return false;
      }
  
      // Calcular el dígito verificador
      var rut = parseInt(value.slice(0, -1), 10);
      var factor = 2;
      var sum = 0;
      var digit;
      while (rut > 0) {
        digit = rut % 10;
        sum += digit * factor;
        rut = Math.floor(rut / 10);
        factor = factor === 7 ? 2 : factor + 1;
      }
      var dv = 11 - (sum % 11);
      dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();
  
      // Validar que el dígito verificador sea correcto
      return dv === lastChar;
    }, "Por favor ingrese un RUT válido."); 

  $("#formulario1").validate({
    rules: {
      rut: {
        required: true,
        rutChileno: true
      },
      nom: {
        required: true,
        minlength: 3,
      },
      apel: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      direc: {
        required: true,
      },
      password: {
        required: true,
        minlength: 5,
      },
      password2: {
        required: true,
        equalTo: "#password",
      },
      cant: {
        required: true,
      },
      ID: {
        required: true,
      }
    }, // --> Fin de reglas
    messages: {
      rut: {
        required: "El rut es un campo obligatorio",
        rutChileno: "El formato del rut no es válido"
      },
      nom: {
        required: "El nombre es un campo obligatorio",
        minlength: "El nombre debe contener almenos 3 caracteres"
      },
      apel: {
        required: "El apellido es un campo obligatorio",
        minlength: "El formato del apellido no es válido"
      },
      direc: {
        required: "La direccion es un capo obligatorio",
      },
      email: {
        required: "El email es un campo requerido",
        email: "El email no cumple el formato de un correo",
      },
      password: {
        required: "La contraseña es una campo obligatorio",
        minlength: "Mínimo 5 caracteres",
      },
      password2: {
        required: "Repita la contraseña anterior",
        equalTo: "Debe ser igual al campo contraseña",
      },
      ID: {
        required: "el id esadads obligatorio",
      }
    },
  });
});
$("#formulario2").validate({
  rules: {
    id: {
      required: true,
    },
    rut: {
      required: true,
      rutChileno: true
    },
    nom: {
      required: true,
      minlength: 3,
    },
    apel: {
      required: true,
      minlength: 3,
    },
    email: {
      required: true,
      email: true,
    },
    direc: {
      required: true,
    },
    password: {
      required: true,
      minlength: 5,
    },
    cant: {
      required: true,
    },
    precio: {
      required: true,
      minlength: 3,
    },
    descuentosub: {
      required: true,
    },
    descoferta: {
      required: true,
    },
    cant: {
      required: true
    }
  }, // --> Fin de reglas
  messages: {
    id: {
      required: "El ID es obligatorio",
    },
    rut: {
      required: "El rut es un campo obligatorio",
      rutChileno: "El formato del rut no es válido"
    },
    nom: {
      required: "El nombre es un campo obligatorio",
      minlength: "El formato del nombre no es válido"
    },
    apel: {
      required: "El apellido es un campo obligatorio",
      minlength: "El formato del apellido no es válido"
    },
    direc: {
      required: "La direccion es un capo obligatorio",
    },
    email: {
      required: "El email es un campo requerido",
      email: "El email no cumple el formato de un correo",
    },
    password: {
      required: "La contraseña es una campo obligatorio",
      minlength: "Mínimo 5 caracteres",
    },
    precio: {
      required: "El precio es obligatorio",
      minlength: "Mínimo 3 caracteres",
    },
    descuentosub: {
      required: "el descuento por subscripcion es obligatorio",
    },
    descoferta: {
      required: "el descuento por oferta es obligatorio",
    },
    cant: {
      required: "La Cantidad es obligatoria"
    }
  },
});

$(document).ready(function () {
  $.get("http://fakestoreapi.com/products",
      function (data) {
          
          $.each(data,
              function (i, item) {
                  var td1 = `<td>${item.title}</td>`;
                  var td2 = `<td><img class="ropa" src="${item.image}"></td>`;
                  var tr = `<tr>${td1}${td2}</tr>`;
                  $('#tblCategorias').append(tr);
              });
      });
});