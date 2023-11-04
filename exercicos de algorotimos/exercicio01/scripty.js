let soma = 0;

for (let numero = 1; numero <= 500; numero++) {
    if (numero % 2 === 1 && numero % 3 === 0) {
        soma += numero;
    }
}

console.log("A soma dos números ímpares múltiplos de três de 1 a 500 é: " + soma);

