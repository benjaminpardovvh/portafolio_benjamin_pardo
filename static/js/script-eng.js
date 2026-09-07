document.addEventListener("DOMContentLoaded", () => {
    const rellenos = document.querySelectorAll('.relleno');
    setTimeout(() => {
        rellenos.forEach(barra => {
            const porcentaje = barra.getAttribute('data-porcentaje');
            barra.style.width = porcentaje;
        });
    }, 300);
    const audio = document.getElementById('greenRoom');
    const botonMusica = document.querySelector('.botonMusica');
    if (audio) {
        audio.muted = true;
        audio.play().catch(error => console.log("Autoplay has iniciated in silence by the navegator rules."));
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
    const sndMove = document.getElementById('sndMove');
    const sndSelect = document.getElementById('sndSelect');
    const elementosInteractivos = document.querySelectorAll('.nav a, button, .btn-lang, .redes a');
    elementosInteractivos.forEach(elemento => {
        elemento.addEventListener('mouseenter', () => {
            if (sndMove) {
                sndMove.currentTime = 0;
                sndMove.play().catch(e => console.log("Audio de interfaz silenciado por el navegador."));
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