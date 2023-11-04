let n = parseInt(prompt("Digite um número de 1 a 10 para a tabuada:"));

if (n >= 1 && n <= 10) {
    for (let i = 0; i <= 10; i++) {
        let resultado = i * n;
        console.log(`${i} x ${n} = ${resultado}`);
    }
} else {
    console.log("Número fora do intervalo válido (1 a 10).");
}
