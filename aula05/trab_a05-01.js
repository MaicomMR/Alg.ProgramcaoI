function mostrarCalculo() {

    var pesoRacao = Number(document.getElementById("inPesoTotal").value);
    var consumoDiario = Number(document.getElementById("inComsumoDiario").value);
    var saida = document.getElementById("outResultado");
    var meses = "";

    pesoRacao = (pesoRacao * 1000);
    var dias = pesoRacao / consumoDiario;


    while (dias > 30) {
        dias = dias - 30;
        meses = meses + 1;

    }
    if (meses < 1) {
        saida.textContent = "A ração é suficiente para mais " + dias + " dias";
    } else {
        saida.textContent = "A ração é suficiente para mais " + meses + " mes(es) e " + dias + " dia(s)";
    }


}

var botao = document.getElementById("inBtn");
botao.addEventListener("click", mostrarCalculo);