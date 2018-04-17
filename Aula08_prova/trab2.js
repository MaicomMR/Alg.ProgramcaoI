function troco() {

    var totalConta = Number(document.getElementById("inConta").value);
    var pagamentoCli = Number(document.getElementById("inPago").value);
    var saidaTexto = document.getElementById("outTexto");
    var troco = pagamentoCli - totalConta;

    if (document.getElementById("inConta").value == "") {
        saidaTexto.textContent = "Por favor, digite o valor da sua conta";
        document.getElementById("inConta").focus();
        return false;
    } 

    if (document.getElementById("inPago").value == "") {
        saidaTexto.textContent = "Por favor, digite o valor que você deu ao caixa";
        document.getElementById("inPago").focus();
        return false;
    } 

    if (troco == 0) {
        saidaTexto.textContent = "Obrigado, volte Sempre!";
    } else if (troco > 0) {
        saidaTexto.textContent = "Troco R$:" + troco.toFixed(2);
    } else {
        troco = -(troco);
        saidaTexto.textContent = "Ops... faltou " + troco.toFixed(2);
    }



}

var botaoVerificador = document.getElementById("vButton");
botaoVerificador.addEventListener("click", troco);