let a = parseInt(prompt("Digite um valor (A) para calcular o fatorial:"));
let resultado = 1;
let sequencia = `${a}! = `;

for (let i = a; i >= 1; i--) {
    resultado *= i;
    sequencia += i;

    if (i > 1) {
        sequencia += " X ";
    }
}

console.log(sequencia + ` = ${resultado}`);
