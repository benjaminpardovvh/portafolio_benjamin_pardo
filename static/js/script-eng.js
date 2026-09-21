document.addEventListener("DOMContentLoaded", () => {
    // RPG-style stat bar animation
    const rellenos = document.querySelectorAll('.relleno');
    setTimeout(() => {
        rellenos.forEach(barra => {
            const porcentaje = barra.getAttribute('data-porcentaje');
            barra.style.width = porcentaje;
        });
    }, 300);

    // Ambient audio
    const audio = document.getElementById('greenRoom');
    const botonMusica = document.querySelector('.botonMusica');
    if (audio) {
        audio.muted = true;
        audio.play().catch(error => console.log("Autoplay started muted due to browser policies."));
        if (botonMusica) {
            botonMusica.textContent = "Play";
            botonMusica.addEventListener('click', () => {
                if (audio.muted) {
                    audio.muted = false;
                    botonMusica.textContent = "Mute";
                } else {
                    audio.muted = true;
                    botonMusica.textContent = "Play";
                }
            });
        }
    }

    // Game sound effects on interaction
    const sndMove = document.getElementById('sndMove');
    const sndSelect = document.getElementById('sndSelect');
    
    // Add project links to interactive elements
    const elementosInteractivos = document.querySelectorAll('.nav a, button, .btn-lang, .redes a, .contenido-proyectos a');
    
    elementosInteractivos.forEach(elemento => {
        elemento.addEventListener('mouseenter', () => {
            if (sndMove) {
                sndMove.currentTime = 0;
                sndMove.play().catch(e => console.log("Audio muted by browser."));
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