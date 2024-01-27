import React, { useEffect, useState } from "react";
import "./App.css";

// Função separada para obter dados da API
async function fetchData(url) {
  const resposta = await fetch(url);

  if (!resposta.ok) {
    throw new Error(`Falha ao obter dados da API: ${resposta.statusText}`);
  }

  return resposta.json();
}

function App() {
  const [cidades, setCidades] = useState([]);
  const [estados, setEstados] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');

  // Função para obter cidades com base no estado selecionado
  async function obterCidades(uf) {
    try {
      const dados = await fetchData(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
      setCidades(dados);
    } catch (error) {
      console.error(`Erro ao obter cidades: ${error.message}`);
    }
  }

  // Função para obter todos os estados
  async function obterEstados() {
    try {
      const dados = await fetchData("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
      setEstados(dados);
    } catch (error) {
      console.error(`Erro ao obter estados: ${error.message}`);
    }
  }

  useEffect(() => {
    obterEstados();
  }, []);

  // Manipulador de mudança de estado
  const handleEstadoChange = (event) => {
    const ufSelecionado = event.target.value;
    setEstadoSelecionado(ufSelecionado);
    obterCidades(ufSelecionado);
  };

  const estilo = {
    border: "1px solid #fff",
    borderRadius: "8px",
    padding: "0.6em 1.2em"
  };

  return (
    <>
      <div className="card">
        <label htmlFor="estados">Selecione um estado:</label>
        <select id="estados" onChange={handleEstadoChange} value={estadoSelecionado}>
          <option value="" disabled>Escolha um estado</option>
          {estados.map((estado, posicao) => (
            <option key={posicao} value={estado.sigla}>{estado.nome}</option>
          ))}
        </select>

        <table style={{ ...estilo, borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={estilo}>Nome da Cidade</th>
            </tr>
          </thead>
          <tbody>
            {cidades.map((cidade, posicao) => (
              <tr key={posicao}>
                <td style={estilo}>{cidade.nome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
