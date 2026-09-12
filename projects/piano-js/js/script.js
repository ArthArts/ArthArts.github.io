let teclas = document.querySelectorAll(".tecla-branca, .tecla-preta");
teclas.forEach(function(tecla) {
    if (tecla.classList.contains("tecla-preta")) {
        tecla.style.backgroundColor = "#1C1C1C";
    } else {
        tecla.style.backgroundColor = "#fffafa";
    }
    tecla.addEventListener("click", function() {
        setTimeout(function() {
            if (tecla.classList.contains("tecla-preta")) {
                tecla.style.backgroundColor = "#1c1c1c";
            } else {
                tecla.style.backgroundColor = "#fffafa";
            }
        }, 200);
        let audioOriginal = tecla.querySelector("audio");
        let copia = audioOriginal.cloneNode();
        copia.play();
        if (tecla.classList.contains("tecla-preta")) {
                tecla.style.backgroundColor = "#363636";
            } else {
                tecla.style.backgroundColor = "#e8e8e8";
            }
    });
});