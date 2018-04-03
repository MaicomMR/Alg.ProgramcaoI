function valorDoPrato() {
precoKg.textContent = precoDoQuilo.toFixed(2) + "R$";
valorAPagar.textContent = "A valor a ser pago é R$: " + valorFinal.toFixed(2);
}

var precoDoQuilo = Number(document.getElementById("precoPorKg").value);
var pesoDaComida = Number(document.getElementById("PesoDaComida").value);
var valorFinal = (precoDoQuilo * pesoDaComida) / 1000;

var calcularValorReal = document.getElementById("calcular");
calcularValorReal.addEventListener("click", valorDoPrato);


