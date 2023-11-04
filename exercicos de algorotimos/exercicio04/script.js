let intervalo0_25 = 0;
let intervalo26_50 = 0;
let intervalo51_75 = 0;
let intervalo76_100 = 0;

while (true) {
    let numero = parseInt(prompt("Digite um número (ou um número negativo para sair):"));

    if (numero < 0) {
        break;  // Sai do loop quando um número negativo é lido
    }

    if (numero >= 0 && numero <= 25) {
        intervalo0_25++;
    } else if (numero >= 26 && numero <= 50) {
        intervalo26_50++;
    } else if (numero >= 51 && numero <= 75) {
        intervalo51_75++;
    } else if (numero >= 76 && numero <= 100) {
        intervalo76_100++;
    }
}

console.log("Quantidade de números no intervalo [0-25]: " + intervalo0_25);
console.log("Quantidade de números no intervalo [26-50]: " + intervalo26_50);
console.log("Quantidade de números no intervalo [51-75]: " + intervalo51_75);
console.log("Quantidade de números no intervalo [76-100]: " + intervalo76_100);
