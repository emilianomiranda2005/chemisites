export default function Services() {
  const services = [
    {
      title: "Diseño de Páginas Web",
      description: "Sitios hermosos y funcionales que convierten visitantes en clientes.",
      benefit: "Imagen profesional que genera confianza",
      icon: "🌐",
    },
    {
      title: "Creación de Redes Sociales",
      description: "Estrategia completa para que tu marca destaque en redes sociales.",
      benefit: "Presencia digital que atrae clientes",
      icon: "📱",
    },
    {
      title: "Automatización con WhatsApp",
      description: "Chatbots inteligentes que atienden clientes 24/7 sin tu intervención.",
      benefit: "Ventas automáticas mientras duermes",
      icon: "💬",
    },
  ]

  return (
    <section className="services">
      <div className="services-container content-max-width">
        <div className="services-header">
          <h2>Nuestros Servicios</h2>
          <p>Soluciones completas para impulsar tu negocio</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-benefit">
                <span className="benefit-icon">✓</span>
                <span>{service.benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
