const links = document.querySelectorAll(".link");

function mudarElemento(elemento: HTMLElement) {
  elemento.style.color = "red";
  elemento.style.border = "2px solid red";
}

links.forEach((link) => {
  if (link instanceof HTMLElement) mudarElemento(link);
});
