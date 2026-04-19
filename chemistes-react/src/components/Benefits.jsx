export default function Benefits() {
  const benefits = [
    {
      number: "01",
      title: "Más Clientes",
      description: "Atrae visitantes calificados y convierte más ventas con un diseño que hipnotiza y una estrategia que funciona.",
    },
    {
      number: "02",
      title: "Imagen Profesional",
      description: "Tu negocio merece una presencia digital que refleje su valor. Nos aseguramos de que parezcas una empresa establecida y confiable.",
    },
    {
      number: "03",
      title: "Automatización de Ventas",
      description: "No pierdas ni una venta. Nuestros sistemas generan leads 24/7 y los cuidan por ti, sin esfuerzo adicional.",
    },
  ]

  return (
    <section className="benefits">
      <div className="benefits-container content-max-width">
        <h2 className="benefits-title">¿Por qué elegir Chemisites?</h2>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-number">{benefit.number}</div>
              <h3 className="benefit-title-small">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
