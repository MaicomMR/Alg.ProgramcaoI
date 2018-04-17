function mercado() {
    var itensCarrinho = Number(document.getElementById("inItens").value);
    var notasde60 = 0;
    var outTexto1 = document.getElementById("outTexto1");
    var outTexto2 = document.getElementById("outTexto2");

    if (document.getElementById("inItens").value == "") {
        outTexto1.textContent = "Por favor, informe o número de unidades";
        document.getElementById("inItens").focus();
        return false;
    } 



    while (itensCarrinho >= 60) {
        notasde60 = notasde60 + 1;
        itensCarrinho = itensCarrinho - 60;
    }

    if (notasde60 >= 1) {
        outTexto1.textContent = notasde60 + " notas de 60 itens";
        if (itensCarrinho >= 1) {
            outTexto2.textContent = "1 nota fiscal de " + itensCarrinho + " itens";
        }
    }
    if (notasde60 == 0) {
        outTexto2.textContent = "1 nota fiscal de " + itensCarrinho + " itens";
    }

}

var botaoVerificador = document.getElementById("vButton");
botaoVerificador.addEventListener("click", mercado);