// function exibirMensagemBoasVindas() {
//     alert('Bem-vindo à nossa página! Esperamos que você tenha uma ótima experiência.');
// }

// window.addEventListener('load', exibirMensagemBoasVindas);

 // Função para verificar se um número é par ou ímpar
//  function verificarParOuImpar(numero) {
//     return numero % 2 === 0;
// }

// // Solicitar ao usuário para inserir um número
// var numeroUsuario = prompt('Digite um número:');

// // Verificar se o número é par ou ímpar e exibir um alerta
// var resultado = verificarParOuImpar(parseInt(numeroUsuario, 10));

// if (resultado) {
//     alert('O número é par!');
// } else {
//     alert('O número é ímpar!');
// }

function calcularMediaAritmetica(numeros) {
    // Verificar se o array está vazio
    if (numeros.length === 0) {
        return null; // Retorna null se o array estiver vazio
    }

    // Calcular a soma dos números no array
    var soma = numeros.reduce(function (acumulador, numero) {
        return acumulador + numero;
    }, 0);

    // Calcular a média aritmética
    var media = soma / numeros.length;

    return media;
}

// Exemplos de uso da função
var conjunto1 = [5, 10, 15, 20];
var conjunto2 = [2, 4, 6, 8, 10];

var mediaConjunto1 = calcularMediaAritmetica(conjunto1);
var mediaConjunto2 = calcularMediaAritmetica(conjunto2);

console.log("Média do conjunto 1:", mediaConjunto1);
console.log("Média do conjunto 2:", mediaConjunto2);
