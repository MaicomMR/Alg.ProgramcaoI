function farmaciaDoacao() {
    var conta = Number(document.getElementById("inValor").value);
    var saida = document.getElementById("saidaTexto");
    var doacao = document.getElementById("doacao");
    var totalAPagar = document.getElementById("total");

    var valorRedondo = Math.ceil(conta);
    var valorDoacao = valorRedondo - conta;

    saidaTexto.style.display = "block"
    doacao.textContent = valorDoacao.toFixed(2);
    totalAPagar.textContent = valorRedondo.toFixed(2);
    
    
}

var btnVer = document.getElementById("btnVer"); // definição do botão como variável
btnVer.addEventListener("click", farmaciaDoacao); // chamada da função ao clicar no botão