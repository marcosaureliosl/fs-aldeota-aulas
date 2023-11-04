let a = parseFloat(prompt("Digite o valor inicial (A):"));
let r = parseFloat(prompt("Digite a razão (R):"));

console.log("Sequência em P.A.:");

for (let i = 1; i <= 10; i++) {
    let valor = a + (i - 1) * r;
    console.log(`Termo ${i}: ${valor}`);
}
