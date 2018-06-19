
// Maicom M. Rodeghiero
// 19/06/2018
// Exercício 01 - Aula 15 - Algoritmos e Programação I
// Dr. Prof. Edécio Fernando Iepsen

function mostrarLetras() {

    var nomeCompleto = document.getElementById("entradaNome").value;
    //aloca espaço para o nome completo e indica o index de onde vai puxar
    var letra = document.getElementById("entradaLetra").value;
    //aloca espaço para a letra e indica o index de onde vai puxar
    var saida1 = document.getElementById("outSaida1"); // indica a saída 1 - vai voltar o nome
    var saida2 = document.getElementById("outSaida2"); // indica a saída 2 - vai mostrar a letra
    var saida3 = document.getElementById("outSaida3"); // indica a saída 3 - vai retornar as palavras onde se repete
    var textoSaida = "";

    var palavraSplitada = nomeCompleto.toLowerCase().split(" "); 
    // Poe tudo em caixa baixa e splita por espaço
    // Vai separar todos os nomes no array "palavraSplitada";


    // console.log(palavraSplitada);
    // console log para verificar se o array ficou certinho

    for (i = 0; i < palavraSplitada.length; i++) {
        // Verificação em laço FOR, vai rodar até que todos os vetores sejam verificados

        if (palavraSplitada[i].includes(letra) == true) {
            // SE a palavraSplitada(nome ou sobrenome) tiver em seu corpo a LETRA(puxada do entradaLetra)
            // vai retornar um booleano VERDADEIRO(true) ou FALSO(false), nesse caso, se retornar verdadeiro...

            textoSaida = textoSaida + " " + palavraSplitada[i];
            // se o resultado de VERDADEIRO, adiciona um espaço e o sobrenome correspondente.
        }
        //console.log(textoSaida);
        // console log para verificar a saída dos dados

        // console.log(palavraSplitada[i].includes(letra));
        // console para verificar o true e false
    }

    var saidaDois = "A letra '" + letra.toUpperCase() + "' consta nestas palavras:";
    // Declara a saída dois como variável apra poder mudar caso a letra não seja encontrada

    if(textoSaida == ""){
        //se a saída for vazia(a letra não pegou em nenhuma palavra)

         saidaDois = "A letra não foi encontrada em nenhum dos nomes a cima."
        // muda a saída dois para informar que nao achou
    }

    saida1.textContent = "Nome: " + nomeCompleto;
    //saida de texto um, devolve o nome digitado.
    saida2.textContent = saidaDois;
    //saida dois, mostra a letra indicada em maiúsculo e cita onde ela foi encontrada
    saida3.textContent = textoSaida.toUpperCase();
    //saida três, puxa todos os nomes em que a palavra se encontra.
}


var botao = document.getElementById("botaoMostrar");
botao.addEventListener("click", mostrarLetras);
// função para chamar o botão no click