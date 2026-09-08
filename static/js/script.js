document.addEventListener("DOMContentLoaded", () => {
    // Animación de las barras de estadísticas estilo RPG
    const rellenos = document.querySelectorAll('.relleno');
    setTimeout(() => {
        rellenos.forEach(barra => {
            const porcentaje = barra.getAttribute('data-porcentaje');
            barra.style.width = porcentaje;
        });
    }, 300);

    // Audio ambiental
    const audio = document.getElementById('greenRoom');
    const botonMusica = document.querySelector('.botonMusica');
    if (audio) {
        audio.muted = true;
        audio.play().catch(error => console.log("Autoplay iniciado en silencio según políticas del navegador."));
        if (botonMusica) {
            botonMusica.textContent = "Reproducir";
            botonMusica.addEventListener('click', () => {
                if (audio.muted) {
                    audio.muted = false;
                    botonMusica.textContent = "Silenciar";
                } else {
                    audio.muted = true;
                    botonMusica.textContent = "Reproducir";
                }
            });
        }
    }

    // Efectos de sonido del juego al interactuar
    const sndMove = document.getElementById('sndMove');
    const sndSelect = document.getElementById('sndSelect');
    
    // Se agregan los enlaces de proyectos a la interactividad
    const elementosInteractivos = document.querySelectorAll('.nav a, button, .btn-lang, .redes a, .contenido-proyectos a');
    
    elementosInteractivos.forEach(elemento => {
        elemento.addEventListener('mouseenter', () => {
            if (sndMove) {
                sndMove.currentTime = 0;
                sndMove.play().catch(e => console.log("Audio silenciado por navegador."));
            }
        });
        elemento.addEventListener('click', (e) => {
            if (sndSelect) {
                sndSelect.currentTime = 0;
                sndSelect.play().catch(e => console.log(e));
            }
        });
    });
});