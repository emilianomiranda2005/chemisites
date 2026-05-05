export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container content-max-width">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">Chemisites</h3>
            <p className="footer-tagline">Agencia digital enfocada en resultados reales</p>
          </div>

          <div className="footer-section">
            <h4>Contacto Rápido</h4>
            <a href="https://wa.me/526644801684" target="_blank" rel="noopener noreferrer" className="footer-link">
              WhatsApp: +52 664 480 1684
            </a>
            <a href="mailto:info@chemisites.com" className="footer-link">
              info@chemisites.com
            </a>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul className="footer-links">
              <li><a href="#servicios" className="footer-link">Diseño Web</a></li>
              <li><a href="#servicios" className="footer-link">E-commerce</a></li>
              <li><a href="#servicios" className="footer-link">Marketing Digital</a></li>
              <li><a href="#servicios" className="footer-link">Automatización</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Secciones</h4>
            <ul className="footer-links">
              <li><a href="#inicio" className="footer-link">Inicio</a></li>
              <li><a href="#portafolio" className="footer-link">Portafolio</a></li>
              <li><a href="#testimonios" className="footer-link">Testimonios</a></li>
              <li><a href="#contacto" className="footer-link">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Chemisites. Todos los derechos reservados.</p>
          <p className="footer-credit">Hecho con amor para empresas que quieren crecer 🚀</p>
        </div>
      </div>
    </footer>
  )
}
