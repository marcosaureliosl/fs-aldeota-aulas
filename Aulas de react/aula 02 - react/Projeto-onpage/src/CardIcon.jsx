
function CardIcon(props) {

  return (
    <div className="card">
      <span className="icon">
        {props.icone||props.imagem}
      </span>
      <h3>{props.titulo}</h3>
      <p>{props.descricao}</p>
    </div>
  );
}

export default CardIcon;
