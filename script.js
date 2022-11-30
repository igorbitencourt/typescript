"use strict";
const links = document.querySelectorAll(".link");
function mudarElemento(elemento) {
    elemento.style.color = "red";
    elemento.style.border = "2px solid red";
}
links.forEach((link) => {
    if (link instanceof HTMLElement)
        mudarElemento(link);
});
