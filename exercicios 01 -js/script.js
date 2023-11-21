// function exibirMensagemBoasVindas() {
//     alert('Bem-vindo à nossa página! Esperamos que você tenha uma ótima experiência.');
// }

// window.addEventListener('load', exibirMensagemBoasVindas);

 // Função para verificar se um número é par ou ímpar
 function verificarParOuImpar(numero) {
    return numero % 2 === 0;
}

// Solicitar ao usuário para inserir um número
var numeroUsuario = prompt('Digite um número:');

// Verificar se o número é par ou ímpar e exibir um alerta
var resultado = verificarParOuImpar(parseInt(numeroUsuario, 10));

if (resultado) {
    alert('O número é par!');
} else {
    alert('O número é ímpar!');
}