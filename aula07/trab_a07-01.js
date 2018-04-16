function verificarMulta() {
    // Leitura da Velocidade permitida indicada pelo usuário
    var velocidadePermitida = Number(document.getElementById("inVelLimite").value);
    // Leitura da Velocidade do veículo informada pelo usuário
    var velocidadeCondutor = Number(document.getElementById("inVelCondutor").value);
    // Definição da saída de texto
    var saidaTexto = document.getElementById("saidaTexto")
    // Cálculo de 20% além da velocidade permitida
    var velocidade20 = velocidadePermitida * 1.20;

    // Condição, se a velocidade for menor que a permitida
    if (velocidadeCondutor <= velocidadePermitida) {
        // Saída de texto para essa condição
        saidaTexto.textContent = "Você passou a baixo do limite permitido, sem multas por hoje!";
        // Mudança de cor do cabeçalho para verde
        cabecalho.style.backgroundColor = "#6ca359";

    // Condição, se a velocidade estiver entre os 20% além do limite...
    } else if (velocidadeCondutor > velocidadePermitida && velocidadeCondutor <= velocidade20) {
        // Saída de texto para essa condição
        saidaTexto.textContent = "Você passou a cima da velocidade permitida, MULTA LEVE";
        // Mudança de cor do cabeçalho para amarela
        cabecalho.style.backgroundColor = "#afa401";
    // Condição, se a velocidade não se encaixar nas outras condições(acima do permitido e acima dos 20%), então multa grave
    } else {
        // Saída de texto para essa condição
        saidaTexto.textContent = "Você passou muito a cima da velocidade permitida, MULTA GRAVE";
        // Mudança de cor do cabeçalho para vermelho
        cabecalho.style.backgroundColor = "#af1500";
    }



}

var btnVer = document.getElementById("btnVer"); // definição do botão como variável
btnVer.addEventListener("click", verificarMulta); // chamada da função ao clicar no botão