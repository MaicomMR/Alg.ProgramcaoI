function abonoSalarial() {
    var salarioFunc = Number(document.getElementById("inSalario").value)
    var anosDeServico = Number(document.getElementById("inAnos").value)
    var outTexto1 = document.getElementById("outTexto1");
    var outTexto2 = document.getElementById("outTexto2");

    if (document.getElementById("inSalario").value == "") {
        outTexto1.textContent = "Por favor, informe o seu salário";
        document.getElementById("inSalario").focus();
        return false;
    } 

    if (document.getElementById("inAnos").value == "") {
        outTexto1.textContent = "Por favor, informe a quantos anos você trabalha conosco";
        document.getElementById("inAnos").focus();
        return false;
    } 

    var abono = (Math.floor(anosDeServico/2) / 100) + 1;
    var salarioFinal = salarioFunc * abono;
    outTexto1.textContent = "Abono:" + Math.floor(anosDeServico/2) + "%";


    
    outTexto2.textContent = "Salário Final R$:" + salarioFinal.toFixed(2);

}

var botaoVerificador = document.getElementById("vButton");
botaoVerificador.addEventListener("click", abonoSalarial);