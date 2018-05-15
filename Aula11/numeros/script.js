



function addNumero() {

    var num = document.getElementById("inNum");
    var saidaGeral = document.getElementById("outNumeros");


    var saida = "";
    saida = saida + num.value + "\n";
    saidaGeral.textContent = saida;
}














var adicionar = document.getElementById("inAdd");
adicionar.addEventListener("click", addNumero);