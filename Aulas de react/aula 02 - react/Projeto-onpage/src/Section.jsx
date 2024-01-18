function Section({ titulo, className, children }) {
  return (
    <section className={className}>
      <h2 className={`${className}-title`}>{titulo}</h2>
      <div className="conteudo">{children}</div>
    </section>
  );
}

export default Section;
