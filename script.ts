interface Empresas {
  nome: string;
  fundacao: number;
  pais: string;
}

interface IData {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresas;
  empresaMontadora: Empresas;
}

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduto(data);
}

fetchProduto();

function showProduto(data: IData) {
  document.body.innerHTML = `
  <div>
    <h2>${data.nome}</h2>
    <p>${data.preco}</p>
    <div>
      <h3>${data.empresaFabricante.nome}</h3>
    </div>
  </div>`;
}
