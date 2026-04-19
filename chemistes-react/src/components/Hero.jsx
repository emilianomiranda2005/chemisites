export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Consigue más clientes con una página que sí vende
          </h1>
          <p className="hero-subtitle">
            En Chemisites creamos sitios web que generan resultados reales. 
            Diseño premium + estrategia = más ventas para tu negocio.
          </p>
          <div className="hero-cta">
            <a 
              href="https://wa.me/526644801684" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Hablar por WhatsApp
            </a>
            <p className="hero-cta-subtext">
              Respuesta en menos de 5 minutos
            </p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-placeholder">
            <div className="gradient-box"></div>
            <div className="accent-circle"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
