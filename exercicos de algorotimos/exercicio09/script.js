let a = parseFloat(prompt("Digite o valor inicial (A):"));
let r = parseFloat(prompt("Digite a razão (R):"));

console.log("Sequência em P.G.:");

for (let i = 1; i <= 10; i++) {
    let valor = a * Math.pow(r, i - 1);
    console.log(`Termo ${i}: ${valor}`);
}
