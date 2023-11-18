// const produto = {
//     nome: 'iPad',
//     preco: 500,
//     desconto: 0.15,
//     precoComDesconto: function () {
//         return this.preco * (1 - this.desconto); //THIS é a forma que eu tenho para referenciar os atributos que pertencem ao objeto;
//     }
// };

// ///OBS: Eu não uso o THIS fora do objeto, mas quando estou dentro é a forma que eu tenho para referenciar seus atributos;

// console.log(produto.nome);
// console.log (produto.precoComDesconto());

// let carro = {
//     marca :"Fiat",
//     preco : 28.789,
//     modelo : "Mobi",


// }
// alert(carro.preco);

// let pessoa = {
   
//     nome :"Marcos ",
//     sobrenome : "Aurelio ",
//     idade :  39,
// }
// alert("Boa tarde " +pessoa.nome +pessoa.sobrenome+pessoa.idade+ " anos");

// function Gato(nomePassado,racaPassada){
//     this.nome = nomePassado;
//     this.raca = racaPassada;
// }

// let gato = {
//     nome: " tom ",
//     peso : 5,
//     raca : " Raça : Siames ",
//     cor : " caramelo ",

//     miar() {
//         return "miauuuuu"
//     },

//     toString(){
//         return this.nome+","+this.peso+","+this.raca+","+this.nome+","+this.cor
//     }
// }


// function Gato(nomePassado ="",racaPassada = ""){
//     this.nome = nomePassado;
//     this.raca = racaPassada;
// }
// let gatoMurph = new Gato("Murph" , "Siames"); {
  
// }
// let gatoLico = new Gato("Lico" , "Persa"); {
    
// }
// let gatoJuba = new Gato("Juba" , ); {
    
// }
// console.log(gatoMurph.raca.toUpperCase()); console
// console.log(gatoLico)
// console.log(gatoJuba)

// let nome = new String ("Marcos");
// alert(nome);

// document.write("Crus Credo")
// document.body.style.backgroundColor = "red"

// function trocarCor() {
//     document.body.style.backgroundColor = "blue" ;
// }
function trocarCor() {
document.body.innerHTML =  document.body.innerHTML +"marcos";
}


