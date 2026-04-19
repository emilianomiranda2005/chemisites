import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you'd send this to a backend or email service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', businessName: '' })
    }, 3000)
  }

  return (
    <section className="contact">
      <div className="contact-container content-max-width">
        <div className="contact-content">
          <h2>Cuéntanos sobre tu negocio</h2>
          <p>Nos encantaría saber más para ayudarte a crecer</p>

          {submitted && (
            <div className="success-message">
              ✓ Gracias. Nos pondremos en contacto pronto.
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono/WhatsApp *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+52 6644801684"
              />
            </div>

            <div className="form-group">
              <label htmlFor="businessName">Nombre del Negocio *</label>
              <input 
                type="text" 
                id="businessName" 
                name="businessName" 
                value={formData.businessName}
                onChange={handleChange}
                required
                placeholder="¿Cuál es tu negocio?"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
