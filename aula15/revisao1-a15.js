
// Maicom M. Rodeghiero
// 18/06/2018
// Exercício 01 - Aula 15 - Algoritmos e Programação I
// Dr. Prof. Edécio Fernando Iepsen

function mostrarLetras() {
    var palavra = document.getElementById("inPalavra").value;
    var saida = document.getElementById("outSaida");


    var palavraSplitada = palavra.toLowerCase().split(""); //splita a palavra por letras e converte todas para minúsculas

    var texto = palavraSplitada[0] + " "; // Poe a primeira letra como a primeira.

    for (i = 1; i < palavraSplitada.length; i++) { 
        
        if (palavraSplitada[i] == palavraSplitada[0]) { //Se a letra for igual a primeira inserir ela...
            texto = texto + palavraSplitada[i] + " "; //insere a letra e um espaço

        } else { // se não for, inserir uma Underline e espaço(para não ficar uma linha contínua)
            texto = texto + "_ ";
        }


    }

    saida.textContent = texto;
}

var botao = document.getElementById("botaoMostrar");
botao.addEventListener("click", mostrarLetras);