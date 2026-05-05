export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contact-container content-max-width">
        <div className="section-header">
          <h2>Hablemos de tu Proyecto</h2>
          <p>Contacta con nosotros y descubre cómo podemos ayudarte a crecer</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>WhatsApp</h3>
              <a href="https://wa.me/526644801684" target="_blank" rel="noopener noreferrer">
                +52 664 480 1684
              </a>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:info@chemisites.com">
                info@chemisites.com
              </a>
            </div>
            <div className="contact-item">
              <h3>Respuesta Rápida</h3>
              <p>En promedio respondemos en menos de 2 horas</p>
            </div>
          </div>

          <div className="contact-cta">
            <h3>¿Necesitas ayuda? Nosotros te contactamos</h3>
            <p>Cuéntanos sobre tu proyecto y uno de nuestros especialistas se comunicará contigo en breve</p>
            <a href="https://wa.me/526644801684" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
