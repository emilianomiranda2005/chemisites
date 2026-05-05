export default function Benefits() {
  const benefits = [
    {
      number: "100%",
      title: "Proyectos Completados",
      description: "Entregamos todo a tiempo y con la máxima calidad"
    },
    {
      number: "+50",
      title: "Empresas Satisfechas",
      description: "Clientes que ya están creciendo con nuestras soluciones"
    },
    {
      number: "3x",
      title: "Aumento en Ventas",
      description: "Promedio de crecimiento que nuestros clientes experimentan"
    },
    {
      number: "24/7",
      title: "Soporte Disponible",
      description: "Siempre listos para ayudarte cuando lo necesites"
    }
  ]

  return (
    <section id="beneficios" className="benefits">
      <div className="benefits-container content-max-width">
        <div className="section-header">
          <h2>¿Por qué elegir Chemisites?</h2>
          <p>Resultados comprobados y compromiso real con tu crecimiento</p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-number">{benefit.number}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="benefits-cta">
          <h3>¿Listo para transformar tu presencia digital?</h3>
          <a href="https://wa.me/526644801684" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
            Hablar por WhatsApp Ahora
          </a>
        </div>
      </div>
    </section>
  )
}
