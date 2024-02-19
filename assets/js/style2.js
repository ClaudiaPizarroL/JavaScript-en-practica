// Creamos las contantes para identificar la caja y los botones de colores
const caja = document.getElementById("caja");
const botones = document.querySelectorAll("button");

//agregar un evento de click
botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        // Obtener el color de fondo del botón
        const color = boton.style.backgroundColor;
        // Cambiar el color de fondo de la caja principal
        caja.style.backgroundColor = color;
    });
});


