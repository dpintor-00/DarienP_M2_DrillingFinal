document.addEventListener('DOMContentLoaded', () => {
    const cambiarTema = document.querySelector("#btnTema");

    cambiarTema.addEventListener('click', () => {
        const body = document.querySelector("body");
        const btn = document.querySelector("#btnTema");
        const img = btn.querySelector("img");

        if (body.classList.contains("oscuro")) {
            body.classList.remove("oscuro");
            btn.classList.remove("btn-light");
            btn.classList.add("btn-dark");
            img.src = "assets/img/LogoDarkTheme.png";
            img.alt = "Tema Oscuro";
        } else {
            body.classList.add("oscuro");
            btn.classList.remove("btn-dark");
            btn.classList.add("btn-light");
            img.src = "assets/img/LogoLightTheme.png";
            img.alt = "Tema Claro";
        }
    });

});

function muestraHab(){
    let tabHab = document.querySelector(".misHab").style.display="block";
    let tabQuien = document.querySelector(".quienSoy").style.display="none";
}

function ocultaHab(){
    let tabQuien = document.querySelector(".quienSoy").style.display="block";
    let tabHab = document.querySelector(".misHab").style.display="none";
}

let tabHabilidades = document.querySelector("#botonHabilidades");
    tabHabilidades.addEventListener('click', (muestraHab));

let tabQuienSoy = document.querySelector("#botonVolver");
    tabQuienSoy.addEventListener('click', (ocultaHab));

function validaForm(){
    nombre = document.getElementById("inputNombre");
    apellido = document.getElementById("inputApellido");
    correo = document.getElementById("inputCorreo");
    alert("¡Hola, " + nombre.value + " " + apellido.value + "! Agradezco tu interés al ingresar tu información, a la brevedad posible me comunicaré contigo a través de tu dirección "+correo.value+" ¡Que tengas un gran día!")
}

let botonSubmit = document.querySelector("form");
    botonSubmit.addEventListener('submit', (validaForm));