function calcularValores() {
// Funcao de exibir os textos, é chamada ao clicar no botão Calcular

    promocao.textContent = "O valor do " + carroNome.value + " ficaria da seguinte forma:";
    // altera o texto do paragrafo "promocao" para o texto acima e informa o nome do carro

    entrada.textContent = "Entrada R$: " + entradaValor;
    // altera o texto do paragrafo "entrada" para o texto acima e informa os 50%

    parcelas.textContent = "12x de: " + parcelasFinal + "R$";
    // altera o texto do paragrafo "entrada" para o texto acima e informa as 12 parcelas
}

var nomeDoCarro = document.getElementById("carroNome"); // Captura o nome do carro //
var precoCarro = Number(document.getElementById("carroValor").value); // Captura o Preço informado//

var entradaValor = precoCarro / 2; // divide o preço do carro por 2 para ter os 50%//
var parcelasCarro = (entradaValor / 12); //Divide os 50% restantes em 12x //
var parcelasFinal = parcelasCarro.toFixed(2) //poe e função de exibir só 2 dígitos após a vírgula//

var calcular = document.getElementById("calcular") //Variável que indica o botão como elemento //
calcular.addEventListener("click", calcularValores) //Ouvinte de evento para chamar a função "calcularValores"//