// Cien.js
const animales = [
    { nombre: "Ballena", imagen: "CienciasImagen/Ballena.jfif" },
    { nombre: "Caballo", imagen: "CienciasImagen/Caballo.jfif" },
    { nombre: "Gallo", imagen: "CienciasImagen/Gallo.jfif" },
    { nombre: "Jirafa", imagen: "CienciasImagen/Jirafa.jfif" },
    { nombre: "Leon", imagen: "CienciasImagen/Leon.jfif" },
    { nombre: "Lobo", imagen: "CienciasImagen/Lobo.jfif" },
    { nombre: "Mariposa", imagen: "CienciasImagen/Mariposa.jfif" },
    { nombre: "Oveja", imagen: "CienciasImagen/Oveja.jfif" },
    { nombre: "pavo", imagen: "CienciasImagen/Pavo.jfif" },
    { nombre: "Pinguino", imagen: "CienciasImagen/Pinguino.jfif" },
    { nombre: "Pulpo", imagen: "CienciasImagen/Pulpo.jfif" },
    { nombre: "Tiburo", imagen: "CienciasImagen/Tiburon.jpg" },
    { nombre: "Tigre", imagen: "CienciasImagen/Tigre.jfif" },
];

let animalCorrecto = animales[Math.floor(Math.random() * animales.length)];
document.getElementById('imagen-animal').src = animalCorrecto.imagen;

function mezclarOpciones(opciones) {
    for (let i = opciones.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opciones[i], opciones[j]] = [opciones[j], opciones[i]];
    }
    return opciones;
}

function generarOpciones() {
    let opciones = [animalCorrecto.nombre];
    while (opciones.length < 4) {
        let animalAleatorio = animales[Math.floor(Math.random() * animales.length)];
        if (!opciones.includes(animalAleatorio.nombre)) {
            opciones.push(animalAleatorio.nombre);
        }
    }
    return mezclarOpciones(opciones);
}

function mostrarOpciones() {
    const opciones = generarOpciones();
    const opcionesContainer = document.getElementById('opciones');
    opcionesContainer.innerHTML = '';

    opciones.forEach(opcion => {
        const button = document.createElement('button');
        button.textContent = opcion;
        button.onclick = () => verificarRespuesta(opcion);
        opcionesContainer.appendChild(button);
    });
}

function verificarRespuesta(opcion) {
    if (opcion === animalCorrecto.nombre) {
        alert("¡Correcto! Es un " + animalCorrecto.nombre);
    } else {
        alert("Incorrecto, intenta de nuevo.");
    }
    reiniciarJuego();
}

function reiniciarJuego() {
    animalCorrecto = animales[Math.floor(Math.random() * animales.length)];
    document.getElementById('imagen-animal').src = animalCorrecto.imagen;
    mostrarOpciones();
}

mostrarOpciones();
