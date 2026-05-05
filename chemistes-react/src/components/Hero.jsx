export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content content-max-width">
        <div className="hero-text">
          <h1 className="hero-title">
            Diseño Web & Marketing Digital para empresas que quieren <span className="highlight">crecer</span>
          </h1>
          <p className="hero-subtitle">
            Creamos soluciones web personalizadas que generan resultados reales. Desde e-commerce hasta plataformas complejas.
          </p>
          <div className="hero-ctas">
            <a href="https://wa.me/526644801684" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Comenzar Proyecto
            </a>
            <a href="#portafolio" className="btn btn-secondary">
              Ver Trabajos
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-gradient-box"></div>
        </div>
      </div>
    </section>
  )
}
