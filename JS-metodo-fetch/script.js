// console.log("Hello world");

// const retorno = fetch("https://imersao.ronierlima.dev/index.html");

// retorno.then((resposta) => {
//     alert(" deu certo , pode comemorar");
//     console.log(resposta.body);
    
// });

// const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/ce/municipios"

// function buscarCidadesCE() {
//     const retorno = fetch(url);

//     retorno.then ((resposta) => { return resposta.json(); })
//     .then((json) => {
//     const primeiraCidade = json[0];

//     const h1 = document.createElement("h1");
//     h1.textContent = primeiraCidade.nome;

//     document.body.appendChild(h1)});
// }


// // buscarCidadesCE()

// const url =
//   "https://servicodados.ibge.gov.br/api/v1/localidades/estados/ce/municipios";

// const cidades = document.getElementById("cidades");

// function criarEAddElemento(cidade) {
//   const cidadeOption = document.createElement("option");
//   cidadeOption.textContent = cidade.nome;

//   cidades.appendChild(cidadeOption);
// }

// function buscarCidadesCE() {
//   //retorna uma Promisse
//   const retorno = fetch(url);

//   // Then trata a Promisse
//   retorno
//     .then((resposta) => {
//       // transforma a resposta em json, retorna uma nova Promisse
//       return resposta.json();
//     })
//     .then((json) => {
//       json.forEach(criarEAddElemento);
//     });
// }

// buscarCidadesCE();



const url =
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados/ce/municipios";

const cidades = document.getElementById("cidades");

function criarEAddElemento(cidade) {
  const cidadeOption = document.createElement("option");
  cidadeOption.textContent = cidade.nome;

  cidades.appendChild(cidadeOption);
}

function buscarCidadesCE() {
  //retorna uma Promisse
  const retorno = fetch(url);

  // Then trata a Promisse
  retorno
    .then((resposta) => {
      // transforma a resposta em json, retorna uma nova Promisse
      return resposta.json();
    })
    .then((json) => {
      json.forEach(criarEAddElemento);
    });
}

buscarCidadesCE();



