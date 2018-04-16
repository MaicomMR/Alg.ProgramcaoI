function jantarComissao() {
    var conta = Number(document.getElementById("inValor").value);
    var saida = document.getElementById("saidaTexto");
    var comissaoTexto = document.getElementById("comissao");
    var totalAPagar = document.getElementById("total");

    var comissao = conta * 0.10;
    var contaFinal = conta + comissao;
    saidaTexto.style.display = "block"
    comissaoTexto.textContent = comissao.toFixed(2);
    totalAPagar.textContent = contaFinal.toFixed(2);
    
}

var btnVer = document.getElementById("btnVer"); // definição do botão como variável
btnVer.addEventListener("click", jantarComissao); // chamada da função ao clicar no botão