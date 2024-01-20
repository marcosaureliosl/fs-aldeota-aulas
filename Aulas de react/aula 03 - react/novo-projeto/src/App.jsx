// import React, { useRef, useState } from "react";

// function App() {
//   const conteudoRef = useRef(null);
//   const h1Ref = useRef(null);
//   const [corDeFundo, setCorDeFundo] = useState("#ffffff");

//   function mostrar() {
//     const novoConteudo = conteudoRef.current.value;
//     h1Ref.current.innerText = novoConteudo;
//   }

//   function focar() {
//     conteudoRef.current.focus();
//   }

//   function alterarCorDeFundo(event) {
//     const novaCor = event.target.value;
//     setCorDeFundo(novaCor);
//     document.body.style.backgroundColor = novaCor; 
//   }

//   return (
//     <div id="app" style={{ backgroundColor: corDeFundo }}>
//       <h1 ref={h1Ref}>Hello World</h1>
//       <input id="conteudo" type="text" ref={conteudoRef} />
//       <button onClick={mostrar}>Mostrar</button>
//       <button onClick={focar}>Focar</button>

//       <input type="color" onChange={alterarCorDeFundo} />
//     </div>
//   );
// }

// export default App;

// import React, { useRef, useState } from "react";

// function App() {

//   // let texto = "Hello World"
//   const [texto, setTexto] = useState("Hoh World");

//   function alterarTexto(event) {
//    setTexto(event.target.value);
//   }


//   return (
//     <div>
//       <h1>{texto}</h1>
//       <input type="text" onChange={alterarTexto} />
//     </div>
//   )
// }

// export default App;

import React, { useState } from "react";

function App() {
  const [times, setTimes] = useState([]);
  const [novoTime, setNovoTime] = useState("");

  function timesParaLi(time) {
    return <li key={time}>{time}</li>;
  }

  function adicionarNovoTime() {
    if (novoTime.trim() !== "") {
      setTimes([...times, novoTime]);
      setNovoTime(""); 
    }
  }

  return (
    <div>
      <button onClick={adicionarNovoTime}>Novo</button>
      <input
        type="text"
        value={novoTime}
        onChange={(e) => setNovoTime(e.target.value)}
      />
      <ul>{times.map(timesParaLi)}</ul>
    </div>
  );
}

export default App;
