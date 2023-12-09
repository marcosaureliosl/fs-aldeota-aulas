// alert('Estuda menino!');

// const  h2s = document.querySelectorAll("h2");

// function mostrar(primeiro){
//     console.log(primeiro);   
// }
// h2s.forEach(mostrar);

// const imagens = document.querySelectorAll('img');

// imagens.forEach(imagem => {
//     imagem.style.border = '5px solid violet';
//   });

const imagensUrl = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm1na0-L9kzAgfQB-bNvQc8FACmObvMnlh4Da8GGL52o2oxuxLH1MTzOfHkw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGXMhVzGo5ZWcYQV1xQoqm71N5J0Sl6cPkzEY8oDV7LgbRF9mUYFYr6SBdw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVSMJ7QEOZpm9w-Dd3ih1KCvoEtswLY9fMTa6xfJHO4gEliHK7_3BJReiXQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohx_rM-3dgVlrv2mPYGQz-JmPFcHW4RcCkugdvgKQXJ2Lp73eXryA-DD1ag&s",
]

function criarImg(url) {
    const imgElement = document.createElement("img");
    imgElement.src = url;
    imgElement.width = 200;
    imgElement.height =200;
    imgElement.style.border = "2px solid violet";
    imgElement.style.margin = "0 3px";
    imgElement.style.cursor = "pointer";
   
    return imgElement;
}
  
imagensUrl.forEach((url) => {
    document.body.appendChild(criarImg(url))    
})




