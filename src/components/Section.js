export default function Section({ title, tag, children, dark, id }) {
  return (
    <section className={`section${dark ? " section--dark" : ""}`} id={id}>
      {tag && <div className="section-tag">{tag}</div>}
      <h2>{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}