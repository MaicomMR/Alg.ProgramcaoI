function converterHorario() {
    var horaBR = Number(document.getElementById("inHora").value); // recebe o valor digitado no input "inHora"
    var outResultado = document.getElementById("outResultado"); // localiza o local de saída, denominado como "outResultado"

    // faz verificação se a hora não é um valor nulo
    if (document.getElementById("inHora").value == "") { //caso seja, rodar as condições a baixo
        outResultado.textContent = 'Por favor, preencha o campo hora'; //mudar o campo de saída para a mensagem indicada...
        document.getElementById("inHora").focus(); // mover o cursor para a caixa de preenchimento
        return false
    }
    horaBR = horaBR + 5; // valor da hora + 5 horas
    if (horaBR < 23.59) { // se o valor não for maior que 23.59, exibir
        outResultado.textContent = horaBR.toFixed(2); // valor da hora + 5
    }
    else { // caso o valor ultrapasse a meia noite, remover 24 horas para regularizar a saída
        outResultado.textContent = (horaBR - 24).toFixed(2);
    }
}

//BOTÃO QUE CHAMA A FUNÇÃO
var inBtn = document.getElementById("inBtn"); 
inBtn.addEventListener("click", converterHorario);