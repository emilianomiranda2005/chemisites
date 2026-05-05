export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendoza",
      company: "Tienda Fashion",
      text: "Chemisites transformó nuestra tienda online. En 3 meses triplicamos nuestras ventas. Altamente recomendado.",
      rating: 5
    },
    {
      id: 2,
      name: "María González",
      company: "Restaurante El Sabor",
      text: "El sistema de reservas online que nos implementaron es increíble. Nuestros clientes lo aman y nosotros ahorramos tiempo.",
      rating: 5
    },
    {
      id: 3,
      name: "Jorge Ruiz",
      company: "Consultoría Financiera",
      text: "Profesionales, puntuales y resultados garantizados. Mi sitio web ahora es mi mejor vendedor.",
      rating: 5
    }
  ]

  return (
    <section id="testimonios" className="testimonials">
      <div className="testimonials-container content-max-width">
        <div className="section-header">
          <h2>Lo que dicen nuestros clientes</h2>
          <p>Empresas que ya están creciendo con Chemisites</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-stars">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
