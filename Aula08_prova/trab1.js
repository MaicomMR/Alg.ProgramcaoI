function consultarCredito() {
    var nomeCliente = document.getElementById("inNome").value;
    var idadeCliente = Number(document.getElementById("inAno").value)
    var saidaInfo = document.getElementById("outTexto");
    var saidaInfo0 = document.getElementById("outTexto0");

    var calcIdade = 2018 - idadeCliente;


    if (document.getElementById("inNome").value == "") {
        saidaInfo0.textContent = "Por favor, preencha o campo nome";
        document.getElementById("inNome").focus();
        return false;
    }

    if (document.getElementById("inAno").value == "") {
        saidaInfo0.textContent = "Por favor, preencha o campo ano de Nascimento";
        document.getElementById("inAno").focus();
        return false;
    }



    if (calcIdade >= 18 && calcIdade < 50) {
        saidaInfo0.textContent = nomeCliente + " - " + calcIdade + " anos";
        saidaInfo.textContent = "Olá " + nomeCliente + ", você esta apto a obter o crédito Empresarial";
    } else {
        saidaInfo0.textContent = nomeCliente + " - " + calcIdade + " anos";
        saidaInfo.textContent = "Desculpe " + nomeCliente + ", mas você não se enquadra na linha de crédito disponível";
    }



}

var botaoVerificador = document.getElementById("vButton");
botaoVerificador.addEventListener("click", consultarCredito);