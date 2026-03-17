const valorInput = document.getElementById("valor");

const converterInput = document.getElementById("botao-converter");

const resultadoInput = document.getElementById("resultado");

const euro = 6;

converterInput.addEventListener("click", () => {
  if (valorInput.value === "") {
    resultadoInput.innerHTML =
      '<span class="text-danger">Digite um valor válido!</span>';
  } else {
    const valor = valorInput.value;

    const resultado = valor * euro;

    resultadoInput.innerHTML = `<span class="text-success">O valor é R$ ${resultado.toFixed(2)}</span>`;
  }
});
