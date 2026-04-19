export default function Testimonials() {
  const testimonials = [
    {
      text: "Chemisites transformó nuestra presencia online. En 3 meses triplicamos nuestros leads. Son profesionales de verdad.",
      author: "Carlos Mendez",
      role: "Propietario, Tienda Gourmet",
      rating: 5,
    },
    {
      text: "Increíble el resultado. La página que nos hicieron genera ventas mientras dormimos. Exacto lo que necesitaba.",
      author: "María López",
      role: "CEO, Consultoría Financiera",
      rating: 5,
    },
    {
      text: "Servicio impecable. El equipo entiende perfectamente lo que necesita un negocio para crecer. Muy recomendado.",
      author: "Roberto García",
      role: "Gerente, Restaurant Premium",
      rating: 5,
    },
  ]

  return (
    <section className="testimonials">
      <div className="testimonials-container content-max-width">
        <h2 className="testimonials-title">Lo que dicen nuestros clientes</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.author}</p>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
