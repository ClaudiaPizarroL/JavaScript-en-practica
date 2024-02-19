// Creamos la variable para el formulario.
let form = document.getElementById("formulario");

// Creamos función para limpiar datos.
function limpiarDatos() {
    document.querySelector("#nombre").innerHTML = "";
    document.querySelector("#asunto").innerHTML = "";
    document.querySelector("#mensaje").innerHTML = "";
}

// Función con mensaje de formulario enviado con éxito.
function exito() {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito!!!"
}

// Funcion para validar los datos ingresados y reevaluar en caso de error.
function validar(name, subjet, message) {

    let controlValidacion = true; 

    let patternName = /[A-a Z-z]/gim; //instrucción para aceptar solo letras.

    if(patternName.test(name) == false) {

        // Si name  no cumple con la validación se entrega mensaje de error.
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido.";
        controlValidacion = false; 
        
    } else {
        // Si name cumple con la validación, eliminamos el mensaje de error
        document.querySelector(".errorNombre").innerHTML = "";
    }


    let patternSubjet = /[A-a Z-z]/gim; // instrucción para aceptar solo letras.

    if(patternSubjet.test(subjet) == false) {
        // Si subjet  no cumple con la validación se entrega mensaje de error.
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido."
        controlValidacion = false; 
    } else {
        // Si subjet cumple con la validación, eliminamos el mensaje de error
        document.querySelector(".errorAsunto").innerHTML = "";
    }


    let patternMessage = /[A-a Z-z]/gim; // instrucción para aceptar solo letras.

    if(patternMessage.test(message) == false) {
        // Si message  no cumple con la validación se entrega mensaje de error.
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido."
        controlValidacion = false;
    } else {
        // Si message cumple con la validación, eliminamos el mensaje de error
        document.querySelector(".errorMensaje").innerHTML = "";
    }


    return controlValidacion; 

};

form.addEventListener( "submit", function( event )
{
    event.preventDefault();
    limpiarDatos();

    let name = document.querySelector("#nombre").value;
    let subjet = document.querySelector('#asunto').value;
    let message = document.querySelector('#mensaje').value;

    let resultado = validar(name, subjet, message);

    if(resultado == true) {
        exito();
    };
})