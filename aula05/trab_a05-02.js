function calcularSaque() {
    var valorSaque = Number(document.getElementById("valorSaque").value);
    var saida01 = document.getElementById("saidaB");
    var notas100; var notas50; var notas10; var resto;

    notas100 = valorSaque / 100; // divide o valor por 100 para retirar o numero de notas de 100
    resto = valorSaque % 100; // captura o resto das notas que não poderiam ser entregues em cédulas de 100
    notas50 = resto / 50; // divide o resto por 50 para capturar se é necessário entregar notas de 50
    resto = resto % 50; // puxa o resto da divisão para então calcular com notas de 10
    notas10 = resto / 10; // divide o restante por notas de 10
    resto = resto % 10;   // captura se ainda há algum resto que não pode ser entregue
    //(no enunciado a maquina possui somente notas de 100,50 e 10)


    if (resto == 0) {  //Se após o calculo todo o valor se encaixa nas notas de 100, 50 e 10 não sobrando nada, então...
        document.getElementById("saidaB").innerHTML =    
        
        "Seu saque pode ser realizado, seu pagamento será efetuado com esta quantia de cédulas: <br><br>"+
        
        Math.trunc(notas100) +
        " Notas de 100,00 R$ <br>" + Math.trunc(notas50) + 
        " Notas de 50,00 R$ <br>" + Math.trunc(notas10) + 
        " Notas de 10,00 R$ <br>";
        caixa_b.style.backgroundColor = "#caffc1"; //altera a cor de fundo da "caixa_b"

    } else { //caso tenha sobrado dinheiro que não poderia ser sacado, então exibir a mensagem a seguir...
        saida01.textContent ="Infelizmente o seu saque não pode ser realizado pois o terminal possui somente notas de 100.00, 50.00 e 10.00R$. Seria possível você sacar: " + (valorSaque - resto) + ".00R$";
        caixa_b.style.backgroundColor = "#ffc7c1";//altera a cor de fundo da "caixa_b"
    }




}

var ativador = document.getElementById("btnVerificar");
ativador.addEventListener("click", calcularSaque);