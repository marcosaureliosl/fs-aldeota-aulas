import React from 'react';
import { BsHouseFill, BsHeartFill, BsEyeFill, } from 'react-icons/bs';
import CardIcon from "./CardIcon";
import Header from "./Header";
import Section from "./Section";
import "./style.css";

function App() {
  const culturas = [
    {
      titulo: "Missão",
      icone:  <BsHouseFill />,
      descricao: "Proporcionar oportunidades de aprendizado inovadoras e acessíveis, capacitando indivíduos a transformarem suas vidas através da programação.",
    },
    {
      titulo: "Valores",
      icone:  <BsHeartFill />,
      descricao: "Comprometimento com a excelência, inclusão, criatividade e aprendizado contínuo, impulsionando o crescimento pessoal e profissional.",
    },
    {
      titulo: "Visao",
      icone:  <BsEyeFill />,
      descricao: "Ser reconhecido como líder no fornecimento de educação em programação, inspirando uma comunidade global de desenvolvedores apaixonados.",
    },
  ];

  const cursos = [
    {
      titulo: "Fullstack",
      imagem:  <img src="images/fullstack-image.png.png" alt="" />,
      descricao: "Abra portas para oportunidades ilimitadas ao dominar o desenvolvimento Full Stack, combinando habilidades front-end e back-end para criar soluções completas e inovadoras.", 
    },
    {
      titulo: "PHPinga",
      imagem:  <img src="images/php-image.png.jpg" alt="" />,
      descricao: "Explore os fundamentos robustos do PHP, desenvolvendo habilidades para criar aplicativos dinâmicos e escaláveis, impulsionando sua carreira na web.", 
    },
    {
      titulo: "React",
      imagem:  <img src="images/react-image.png.png" alt="" />,
      descricao: "Mergulhe no ecossistema React, capacitando-se para construir interfaces de usuário modernas e interativas, elevando seu desenvolvimento front-end a novos patamares.",
    },
  ];
  
  return (
    <>
      <Header />
      <main>
        <Section titulo="Sobre" className="sobre-section">
          <div className="cards">
            {culturas.map((cultura) => (
              <CardIcon key={cultura.titulo} titulo={cultura.titulo} descricao={cultura.descricao} tipo="icone" icone={cultura.icone} />
            ))}
          </div>
        </Section>

        <Section titulo="Cursos" className="cursos-section">
          <div className="cards">
            {cursos.map((curso) => (
              <CardIcon key={curso.titulo} titulo={curso.titulo} descricao={curso.descricao} tipo="imagem" imagem={curso.imagem} />
            ))}
          </div>
        </Section>

       
        <Section titulo="Contato" className="contato-section">
          <div className="footer">
            <p>Entre em contato conosco para mais informações:</p>
            <p>Email: contato@seuemail.com</p>
            <p>Telefone: (XX) XXXX-XXXX</p>
            <p>© Copyright</p>
          </div>
        </Section>
      </main>

     
    </>
  );
}

export default App;
