function mostrar() {

    var nomeDoProduto = document.getElementById("inNomeProd").value;
    var precoDoProduto = Number(document.getElementById("inPreco").value);
    var precoAVista = precoDoProduto-(precoDoProduto * 0.10);
    var precoParcelado = precoDoProduto/3;




    document.getElementById('outResposta').innerHTML =
    nomeDoProduto + " À vista por: " + precoAVista.toFixed(2) + "R$ ou em 3x de:"+ precoParcelado.toFixed(2) +"R$";

}

var btEntrada = document.getElementById("btEntrada");
btEntrada.addEventListener("click", mostrar);