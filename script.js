const display = document.querySelector(".display");
const btnAumentar = document.querySelector(".aumentar");
const btnDiminuir = document.querySelector(".diminuir");

let contador = 0;

function render() {
  display.textContent = String(contador);
  display.classList.toggle("negativo", contador < 0);
}

btnAumentar.addEventListener("click", () => {
  contador++;
  render();
});

btnDiminuir.addEventListener("click", () => {
  contador--;
  render();
});

render();
