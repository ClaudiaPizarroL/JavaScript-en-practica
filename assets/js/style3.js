// creamos constantes
const valor1Input = document.getElementById('valor1');
const valor2Input = document.getElementById('valor2');
const resultadoSpan = document.querySelector('.resultado');
const btnSumar = document.getElementById('btn-sumar');
const btnRestar = document.getElementById('btn-restar');

// Función para sumar
function sumar() {
    const valor1 = parseFloat(valor1Input.value);
    const valor2 = parseFloat(valor2Input.value);
    const resultado = valor1 + valor2;
    resultadoSpan.textContent = resultado;
}

// Función para restar
function restar() {
    const valor1 = parseFloat(valor1Input.value);
    const valor2 = parseFloat(valor2Input.value);
    let resultado = valor1 - valor2;
    // Si el resultado es negativo, mostramos 0
    if (resultado < 0) {
        resultado = 0;
    } else {
        resultado = resultado;
    }
    resultadoSpan.textContent = resultado;}

// Asignamos el evento click a los botones de suma y resta
btnSumar.addEventListener('click', sumar);
btnRestar.addEventListener('click', restar);