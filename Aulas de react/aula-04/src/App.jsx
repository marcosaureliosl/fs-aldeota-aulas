import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cidades, setCidades] = useState([]);
  const [estados, setEstados] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');

  async function getCidades(uf) {
    const resposta = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
    );

    const dados = await resposta.json();

    setCidades(dados);
  }

  async function getEstados() {
    const resposta = await fetch(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    );

    const dados = await resposta.json();

    setEstados(dados);
  }

  useEffect(() => {
    getEstados();
  }, []);

  const handleEstadoChange = (event) => {
    const ufSelecionado = event.target.value;
    setEstadoSelecionado(ufSelecionado);
    getCidades(ufSelecionado);
  };

  const estilo = { border: "1px solid #fff",borderRadius: "8px" , padding: "0.6em 1.2em" };

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
