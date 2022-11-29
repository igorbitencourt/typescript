"use strict";
async function fetchProduto() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    showProduto(data);
}
fetchProduto();
function showProduto(data) {
    document.body.innerHTML = `
  <div>
    <h2>${data.nome}</h2>
    <p>${data.preco}</p>
    <div>
      <h3>${data.empresaFabricante.nome}</h3>
    </div>
  </div>`;
}
