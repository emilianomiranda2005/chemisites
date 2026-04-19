export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container content-max-width">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">Chemisites</h3>
            <p className="footer-tagline">Agencia digital enfocada en resultados</p>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <a href="https://wa.me/526644801684" target="_blank" rel="noopener noreferrer" className="footer-link">
              WhatsApp: +52 664 480 1684
            </a>
            <p className="footer-email">info@chemisites.com</p>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Diseño Web</a></li>
              <li><a href="#services" className="footer-link">Social Media</a></li>
              <li><a href="#services" className="footer-link">Automatización</a></li>
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
