function mostrar() {

    var nomeProduto = document.getElementById("nomeProduto").value;
    var precoDoProduto = Number(document.getElementById("precoProduto").value);
    var valorFinal = precoDoProduto + precoDoProduto + (precoDoProduto / 2);
    var valorMeio = precoDoProduto / 2;



    document.getElementById('outResposta').innerHTML =
        "Leve 3 " + nomeProduto + " por R$: " + valorFinal.toFixed(2) + " O 3º custa apenas R$:" + valorMeio.toFixed(2);

}

var btEntrada = document.getElementById("btEntrada");
btEntrada.addEventListener("click", mostrar);