function raizExata() {
    var numeroEntrada = Number(document.getElementById("inNumRaiz").value);
    var numeroTratado = Math.sqrt(numeroEntrada);
    var numeroSplitado = numeroTratado.toString().split('.');

    if (isNaN(numeroTratado)){
        outResultado.textContent = "Informe um número válido";
        return false
    }


    if (numeroSplitado[1] > 0) {
        outResultado.textContent = "Seu número não tem uma raiz exata";
    }
    if (numeroSplitado[1] == undefined){
        outResultado.textContent = "Seu número tem uma raiz exata, ela é: "+ numeroTratado;
    }
}
//BOTÃO QUE CHAMA A FUNÇÃO
var inBtn = document.getElementById("inBtn");
inBtn.addEventListener("click", raizExata);