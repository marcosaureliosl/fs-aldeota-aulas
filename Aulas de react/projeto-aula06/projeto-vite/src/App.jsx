import React from "react";
import axios from "axios";

function App() {
  async function buscarTodos() {
    try {
      
      const response = await axios.post("your-api-endpoint-here");
      console.log(response.data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <button onClick={buscarTodos}>Buscar usuários</button>
    </>
  );
}

export default App;

