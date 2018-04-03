function converterTempo() {
var nomeFilme = document.getElementById("inFilme").value;
var duracaoFilme = Number(document.getElementById("inTempo").value);
var saidaRespota = document.getElementById("resposta");
var horas = 0;


while (duracaoFilme >= 60) {
    horas = horas + 1;
    duracaoFilme = duracaoFilme - 60;
}

document.getElementById('resposta').innerHTML =
"O filme " + nomeFilme + " Tem uma duração total de: " + horas +"h"+ duracaoFilme+"min";

}

var inBtn = document.getElementById("inBtn");
inBtn.addEventListener("click", converterTempo);
