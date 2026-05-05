export default function Gallery() {
  const portfolio = [
    { id: 1, title: "Tienda de Ropa en Línea", category: "E-commerce", description: "Plataforma de ventas con +10k productos" },
    { id: 2, title: "Consultoría Financiera Premium", category: "Servicios", description: "Sitio corporativo con CRM integrado" },
    { id: 3, title: "Restaurant & Catering", category: "Gastronomía", description: "Reservas online + menú digital" },
    { id: 4, title: "Agencia de Marketing Digital", category: "Marketing", description: "Portfolio profesional + blog SEO optimizado" },
    { id: 5, title: "Clínica Dental Moderna", category: "Salud", description: "Sistema de citas online integrado" },
    { id: 6, title: "Academia de Idiomas Online", category: "Educación", description: "Plataforma e-learning completa" },
  ]

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
              <div className="portfolio-image-placeholder">
                <div className="placeholder-gradient"></div>
              </div>
              <div className="portfolio-overlay">
                <div className="portfolio-content">
                  <span className="portfolio-category">{project.category}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
