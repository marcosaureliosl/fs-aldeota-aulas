let menorAltura = Number.MAX_VALUE;  // Inicializa com um valor infinito positivo
let maiorAltura = Number.MIN_VALUE;  // Inicializa com um valor infinito negativo

for (let i = 1; i <= 15; i++) {
    let altura = parseFloat(prompt(`Digite a altura da pessoa ${i} (em centímetros):`));

    if (altura < menorAltura) {
        menorAltura = altura;
    }

    if (altura > maiorAltura) {
        maiorAltura = altura;
    }
}

console.log(`A menor altura do grupo é: ${menorAltura} cm`);
console.log(`A maior altura do grupo é: ${maiorAltura} cm`);