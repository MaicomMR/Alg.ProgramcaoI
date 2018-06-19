
// Maicom M. Rodeghiero
// 19/06/2018
// Exercício 01 - Aula 15 - Algoritmos e Programação I
// Dr. Prof. Edécio Fernando Iepsen

var numeros = [];
// definição do Array que vai receber os números no escopo Global
var saida = document.getElementById("saidaTexto");
// definição da saída


function adicioanar() {
    // função chamada para adicioanr números para o Array
    var entrada = Number(document.getElementById("inNumero").value);
    // Puxa o valor informado no index

    // verificação se a entrada é um número válido
    if (entrada == "" || isNaN(entrada)) {
        // se for vazio ou nulo, informar mensagem e por foco no index.
        inNumero.focus();
        alert("Por favor, insira um número válido")

    } else {
        // se for válido, "EMPURRA" para o array
        numeros.push(entrada);
    }
    

    console.log(entrada);  
    console.log(numeros);
    // consoles para testar

}
function maior() {
    // função para verificar o maior número do Array
    if (numeros.length < 1) {
        // se o Array estiver vazio vai dizer que não tem nenhum número
        saida.textContent = "A sua lista de números esta vazia"
    } else {
        // se o array possíu números, então roda a verificação
        var maior = numeros[0]; // a princípio o maior número é primeiro do Array, se nas verificações psoteriores encontrar um maior, este assumirá a variável
        for (i = 0; i < numeros.length; i++) { //rodar a verificação igual ao número de vetores do array
            if (numeros[i] > maior) { // se o número em verificação for maior que o maior até o momento, então...
                maior = numeros[i]; //Então o número maior passa a ser o maior encontrado até o momento
            }

        }
        saida.textContent = "O maior número é " + maior;
        // informa o número maior.
    }
}





var btAdd = document.getElementById("btnAdd");
btAdd.addEventListener("click", adicioanar);

var btVer = document.getElementById("btnVer");
btVer.addEventListener("click", maior);