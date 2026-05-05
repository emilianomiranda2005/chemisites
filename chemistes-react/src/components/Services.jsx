export default function Services() {
  const services = [
    {
      id: 1,
      title: "Diseño Web Premium",
      description: "Sitios web modernos, rápidos y orientados a conversión. Diseño responsivo en todas las plataformas.",
      icon: "🎨"
    },
    {
      id: 2,
      title: "E-commerce & Tiendas",
      description: "Plataformas de venta online con pasarelas de pago integradas. Todo listo para vender desde día 1.",
      icon: "🛍️"
    },
    {
      id: 3,
      title: "Social Media & Marketing",
      description: "Estrategias digitales completas. Desde redes sociales hasta publicidad pagada que convierte.",
      icon: "📱"
    },
    {
      id: 4,
      title: "Automatización Digital",
      description: "Sistemas y herramientas que automatizan tu negocio. Menos trabajo manual, más resultados.",
      icon: "⚙️"
    },
    {
      id: 5,
      title: "SEO & Posicionamiento",
      description: "Posiciona tu marca en Google. Aparecer en los primeros lugares es nuestro objetivo.",
      icon: "📊"
    },
    {
      id: 6,
      title: "Consultoría Digital",
      description: "Análisis estratégico de tu presencia digital. Te decimos qué funciona y qué necesita mejorar.",
      icon: "💡"
    }
  ]

  return (
    <section id="servicios" className="services">
      <div className="services-container content-max-width">
        <div className="section-header">
          <h2>Nuestros Servicios</h2>
          <p>Soluciones web completas para empresas en cualquier industria</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="https://wa.me/526644801684" target="_blank" rel="noopener noreferrer" className="service-link">
                Saber más →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
