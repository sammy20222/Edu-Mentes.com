let tiempoRestante = 30;
let intervaloTiempo;
let respuestaCorrecta = 0;
let preguntasRespondidas = 0; // Contador de preguntas respondidas
const limitePreguntas = 5; // Límite de preguntas

document.addEventListener('DOMContentLoaded', () => {
    iniciarJuego();
});

function iniciarJuego() {
    tiempoRestante = 30;
    preguntasRespondidas = 0; // Reinicia el contador al iniciar el juego
    document.getElementById('retroalimentacion').textContent = '';
    document.getElementById('confeti').style.display = 'none';
    document.getElementById('barra-tiempo').style.width = '100%';

    generarPregunta();
    intervaloTiempo = setInterval(actualizarTiempo, 1000);
}

function actualizarTiempo() {
    tiempoRestante--;
    document.getElementById('barra-tiempo').style.width = (tiempoRestante / 30) * 100 + '%';
    
    if (tiempoRestante <= 0) {
        clearInterval(intervaloTiempo);
        document.getElementById('retroalimentacion').textContent = '¡Se acabó el tiempo!';
        document.getElementById('retroalimentacion').className = 'incorrecto';
    }
}

function generarPregunta() {
    if (preguntasRespondidas < limitePreguntas) {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        respuestaCorrecta = num1 + num2;
        document.getElementById('pregunta').textContent = `¿Cuánto es ${num1} + ${num2}?`;
    } else {
        finalizarJuego();
    }
}

function enviarRespuesta() {
    const respuestaUsuario = parseInt(document.getElementById('respuesta').value);

    if (respuestaUsuario === respuestaCorrecta) {
        document.getElementById('retroalimentacion').textContent = '¡Correcto!';
        document.getElementById('retroalimentacion').className = 'correcto';
        mostrarConfeti();
        preguntasRespondidas++; // Incrementa el contador de preguntas
        setTimeout(() => {
            generarPregunta();
            document.getElementById('retroalimentacion').textContent = '';
        }, 2000); // Espera antes de mostrar una nueva pregunta
    } else {
        document.getElementById('retroalimentacion').textContent = 'Incorrecto';
        document.getElementById('retroalimentacion').className = 'incorrecto';
    }
}

function finalizarJuego() {
    clearInterval(intervaloTiempo);
    document.getElementById('pregunta').textContent = '¡Juego terminado!';
    document.getElementById('retroalimentacion').textContent = `Respondiste ${preguntasRespondidas} de ${limitePreguntas} preguntas correctamente.`;
}

function mostrarConfeti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
