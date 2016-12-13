
// Cuando use el botón CONECTAR, me aparezca una ALERTA que me ponga "Quiero conectarme con el usuario "nombre" " El nombre que hayamos rellenado en el INPUT del formulario
// Cuando use el botón ENVIAR, me aparezca una ALERTA que me ponga "Quiero enviar el mensaje "mensaje" " El mensaje que hayamos rellenado en el INPUT del formulario del CHAT
// Quiero intentar que ademas ese mensaje me aparezca en mi ventana del chat


(function(){

	var formularioTexto = document.getElementById("formularioTexto"),
		botonEnviar = document.getElementById("btnmensaje");

	var enviar = function () {
		if (formularioTexto.mensaje.value == 0) {
			alert("Complete el mensaje")
		} else {
			alert("Su mensaje es: " + formularioTexto.mensaje.value)
		}
	}

	formularioTexto.addEventListener("submit", enviar);


	var formularioNombre = document.getElementById("formularioNombre"),
		botonConectar = document.getElementById("conectar")

	var conectar = function () {
		if (formularioNombre.nombre.value == 0) {
			alert("Introduzca Nombre de Usuario")
		} else {
			alert("Su nombre en el Chat será: " + formularioNombre.nombre.value)
		}
	}

	formularioNombre.addEventListener("submit", conectar);

}());