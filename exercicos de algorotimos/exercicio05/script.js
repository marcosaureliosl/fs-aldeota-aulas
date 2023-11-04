let quantidadePares = 0;
let quantidadeImpares = 0;
let somaPares = 0;
let somaTotal = 0;

while (true) {
    let numero = parseInt(prompt("Digite um número positivo (ou 0 para encerrar):"));

    if (numero === 0) {
        break;  // Sai do loop quando 0 é lido
    }

    if (numero > 0) {
        somaTotal += numero;

        if (numero % 2 === 0) {
            quantidadePares++;
            somaPares += numero;
        } else {
            quantidadeImpares++;
        }
    }
}

let mediaPares = quantidadePares > 0 ? somaPares / quantidadePares : 0;
let mediaGeral = quantidadePares > 0 ? somaTotal / (quantidadePares + quantidadeImpares) : 0;

console.log("Quantidade de números pares: " + quantidadePares);
console.log("Quantidade de números ímpares: " + quantidadeImpares);
console.log("Média dos valores pares: " + mediaPares);
console.log("Média geral dos números lidos: " + mediaGeral);
