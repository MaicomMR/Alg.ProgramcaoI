function parOuImpar() {
    var numero = Number(document.getElementById("inNumero").value);
    var outResultado = document.getElementById("outResultado");

    outResultado.textContent = "Teste";
    var resultado = numero % 2;


    if (resultado == 0) {
        outResultado.textContent = "Par";
    }
    else {
        outResultado.textContent = "Ímpar";
    }
}

var botao = document.getElementById("inBtn");
botao.addEventListener("click", parOuImpar);