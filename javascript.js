const input = document.querySelector("input");

function totalMudou() {
  const p = document.querySelector("p");
  localStorage.setItem("total", +input.value);
  let value = +input.value + 100 - input.value * 0.2;
  p.innerText = `ganho total: ${+input.value + 100 - input.value * 0.2}`;
}

input.addEventListener("keyup", totalMudou);
