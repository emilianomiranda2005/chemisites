export default function Gallery() {
  const portfolio = [
    {
      id: 1,
      title: "Restaurante Local – Estrategia en Instagram",
      context: "Ayudamos a este negocio a mejorar su presencia digital",
      category: "Redes Sociales",
      image: "https://images.unsplash.com/photo-1460925895917-aaf4af68a1a3?w=500&h=500&fit=crop",
      metrics: ["+120% en interacción", "+80 clientes nuevos al mes", "+3X más mensajes en WhatsApp"],
    },
    {
      id: 2,
      title: "E-commerce de Moda – Optimización de Conversión",
      context: "Rediseño completo con enfoque en resultados de ventas",
      category: "Página Web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop",
      metrics: ["+250% en ventas online", "+45% ticket promedio", "+89% de retorno de clientes"],
    },
    {
      id: 3,
      title: "Clínica Dental – Automatización de Citas",
      context: "Sistema de reservas integrado con CRM y email marketing",
      category: "Automatización",
      image: "https://images.unsplash.com/photo-1554224311-beee415c15cb?w=500&h=500&fit=crop",
      metrics: ["+65% de citas confirmadas", "-40% citas canceladas", "+180% en consultas iniciales"],
    },
    {
      id: 4,
      title: "Agencia de Viajes – Estrategia SEO",
      context: "Posicionamiento en buscadores y captura de leads cualificados",
      category: "Marketing Digital",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=500&fit=crop",
      metrics: ["+320% tráfico orgánico", "+150 leads mensuales", "5to en búsquedas principales"],
    },
    {
      id: 5,
      title: "Consultoría Empresarial – Sitio Corporativo",
      context: "Rediseño premium con integración de sistemas de consulta",
      category: "Web Premium",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
      metrics: ["+210% en consultas", "+95% tasa de conversión", "Reducción 60% en tiempo de respuesta"],
    },
    {
      id: 6,
      title: "Academia Online – Plataforma E-learning",
      context: "Plataforma educativa con gestión de estudiantes integrada",
      category: "Educación",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop",
      metrics: ["+500 estudiantes activos", "+92% satisfacción", "+3.2X ingresos recurrentes"],
    },
  ];

  return (
    <section id="portafolio" className="portfolio">
      <div className="portfolio-container content-max-width">
        <div className="section-header">
          <h2>Nuestras Obras</h2>
          <p>Proyectos que generaron resultados reales para nuestros clientes</p>
        </div>

        <div className="portfolio-grid">
          {portfolio.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="portfolio-info">
                <span className="portfolio-tag">{project.category}</span>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-context">{project.context}</p>

                <div className="portfolio-metrics">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="metric-item">
                      <span className="metric-icon">✓</span>
                      <span className="metric-text">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
