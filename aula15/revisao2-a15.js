// Maicom M. Rodeghiero
// 18/06/2018
// Exercício 01 - Aula 15 - Algoritmos e Programação I
// Dr. Prof. Edécio Fernando Iepsen

function polindromo() {

    var palavra = document.getElementById("inPalavra").value; // aloca variavel para a palavra de entrada.
    var saida = document.getElementById("outSaida"); //aloca a saída com o id da saída.

    var palavraSplit = palavra.toLowerCase().split(""); // poe toda a palavra em caixa baixa e em seguida splita toda a mensagem.
    var invertida = ""; //aloca variável para receber as letras na ordem invertida.


    var rodar = palavraSplit.length - 1; //Variavel que vai somar o número de letras para fazer a contagem decrescente.


    
    for (i = 0; i < palavraSplit.length; i++) { //Laço for que vai rodar o msm número de vezes que as letras da palavra

        invertida = invertida + palavraSplit[rodar]; 
        // Aqui o bicho pega...
        // a variável invertida recebe ela mesmo(para ir formando a palavra inversa)
        // e a cada laço do for ela vai receber uma das letras de TRAS para a FRENTE, assim invertendo



        rodar = rodar - 1; // a cada laço o valor rodar diminui um para pegar o caractere anterior da palavra
    }

    if (invertida == palavra) { // Se a palavra invertida for igual a palavra de entrada, ela é Polídroma
        saida.textContent = "A palavre é polídroma";
    } else { // SE NÃO, não é polídroma
        saida.textContent = "A palavre não é polídroma";

    }
}


var botao = document.getElementById("botaoMostrar");
botao.addEventListener("click", polindromo);