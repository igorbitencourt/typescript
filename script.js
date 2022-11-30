"use strict";
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const botao = document.getElementById("btn-mobile");
function ativarMenu(elemento) {
    const menu = document.getElementById("nav");
    const button = elemento.currentTarget;
    if (button instanceof HTMLElement && menu) {
        menu?.classList.toggle("active");
        const active = menu?.classList.contains("active");
        if (active) {
            button.setAttribute("aria-expended", "false");
            button.setAttribute("aria-label", "Abrir Menu");
        }
        else {
            button.setAttribute("aria-expended", "true");
            button.setAttribute("aria-label", "Fechar Menu");
        }
    }
}
botao?.addEventListener("pointerdown", ativarMenu);
