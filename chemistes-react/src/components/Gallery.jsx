export default function Gallery() {
  const portfolio = [
    { id: 1, title: "Tienda E-commerce Gourmet", category: "E-commerce" },
    { id: 2, title: "Consultoría Financiera Premium", category: "Servicios" },
    { id: 3, title: "Restaurant & Catering", category: "Gastronomía" },
    { id: 4, title: "Agencia de Marketing Digital", category: "Marketing" },
    { id: 5, title: "Clínica Dental Moderna", category: "Salud" },
    { id: 6, title: "Academia de Idiomas Online", category: "Educación" },
  ]

  return (
    <section className="gallery">
      <div className="gallery-container content-max-width">
        <div className="gallery-header">
          <h2>Nuestras Obras</h2>
          <p>Proyectos que generaron resultados reales</p>
        </div>

        <div className="gallery-grid">
          {portfolio.map((project) => (
            <div key={project.id} className="gallery-item">
              <div className="gallery-image-placeholder">
                <div className="placeholder-gradient"></div>
              </div>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <span className="gallery-category">{project.category}</span>
                  <h3 className="gallery-title">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
