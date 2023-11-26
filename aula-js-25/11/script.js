
const h1selec = document.querySelector("h1");

// h1selec.textContent = "Show demais esse tipo de manipulação"
// h1selec.style.background = ("")
// h1selec.innerText = new Date().toLocaleString("pt-br") + " Boa tarde !"


// console.log(h1selec)

// function mudarParaDia() {
//    const circulo = document.getElementById("circulo");

//    circulo.style.background = "yellow";
// }
  
// function mudarParaNoite() {
//     const circulo = document.getElementById("circulo");
 
//     circulo.style.background = "grey";
//  }

// const circulo = document.getElementById ("circulo");
// function mudarParaDia() {

//        const circulo = document.getElementById("circulo");
    
//        circulo.style.background = "yellow";
//     }
      
//     function mudarParaNoite() {

//         const circulo = document.getElementById("circulo");
     
//         circulo.style.background = "white";
//      }

//      function mudar() {
//         circulo.classList.toggle("noite")
//         const mudar = document.getElementById("circulo");
     
//         circulo.style.background = "white";
//      }

//      const botoes = document.getElementsByTagName("button");

//      botoes [0].style.background = "yellow";
//      botoes [1].style.background = "grey";

//      const botoesArray = [...botoes];

//      console.log([...botoes]);


    const lista = document.querySelector("ul");

   const fruta = prompt("Digite aqui...")
   lista.innerHTML += `<li> ${fruta} </li>`;

    console.log(lista);


    // itens.forEach(item => {
    //     const novoItem = document.createElement("li");
    //     novoItem.textContent = item;
    //     lista.appendChild(novoItem);
    // });
    
