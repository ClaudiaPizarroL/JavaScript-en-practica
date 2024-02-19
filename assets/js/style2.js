// Creamos las contantes para identificar la caja y los botones de colores
const caja = document.getElementById("caja");
const botones = document.querySelectorAll("button");

//agregar un evento de click
for (const boton of botones) {
    boton.addEventListener("click", function() {
        const color = this.style.backgroundColor;
        caja.style.backgroundColor = color;
    });
}


