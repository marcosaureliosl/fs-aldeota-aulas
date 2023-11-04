let soma = 0;
let totalValores = 0;
let totalPositivos = 0;
let totalNegativos = 0;

while (true) {
    let valor = parseFloat(prompt("Digite um valor (ou digite 0 para sair):"));
    
    if (valor === 0) {
        break;  // Sai do loop quando o usuário digita 0
    }

    totalValores++;
    soma += valor;

    if (valor > 0) {
        totalPositivos++;
    } else if (valor < 0) {
        totalNegativos++;
    }
}

let media = soma / totalValores;

let percentualPositivos = (totalPositivos / totalValores) * 100;
let percentualNegativos = (totalNegativos / totalValores) * 100;

console.log("Média dos valores lidos: " + media.toFixed(2));
console.log("Quantidade de valores positivos: " + totalPositivos);
console.log("Quantidade de valores negativos: " + totalNegativos);
console.log("Percentual de valores positivos: " + percentualPositivos.toFixed(2) + "%");
console.log("Percentual de valores negativos: " + percentualNegativos.toFixed(2) + "%");
