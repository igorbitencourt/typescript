"use strict";
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    showCursos(data);
}
fetchCursos();
function showCursos(cursos) {
    cursos.forEach((curso) => {
        let color;
        if (curso.nivel === "iniciante") {
            color = "blue";
        }
        else if (curso.nivel === "avancado") {
            color = "red";
        }
        document.body.innerHTML += `
      <div>
      <h2 style="color: ${color}">Curso: ${curso.nome}<h2>
      <p>Horas: ${curso.horas}</p>
      <p>Aulas: ${curso.aulas}</p>
      <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
      <p>tags: ${curso.tags.join(", ")}</p>
      <p>Aulas: ${curso.idAulas.join(" | ")}</p>

      </div>
    `;
    });
}
