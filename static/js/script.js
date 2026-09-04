let musica = document.querySelector("#greenRoom")
let pararMusica = document.querySelector(".botonMusica")

musica.play().catch(error => {
    console.log("la musica fue bloqueada por el navegador")
})

pararMusica.addEventListener("click", function () {
    if (pararMusica !== null) {
        if (this.textContent === "Silenciar musica") {
            musica.pause()
            this.textContent = "Reproducir musica"
        } else {
            musica.currentTime = 0;
            musica.play()
            this.textContent = "Silenciar musica"
        }
    } else {
        console.log("el boton no existe")
    }
})