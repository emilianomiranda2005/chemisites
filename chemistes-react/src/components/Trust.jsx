export default function Trust() {
  const stats = [
    { number: "150+", label: "Clientes satisfechos" },
    { number: "$2M+", label: "En ventas generadas" },
    { number: "98%", label: "Tasa de satisfacción" },
  ]

  return (
    <section className="trust">
      <div className="trust-container content-max-width">
        <div className="trust-header">
          <h2>Confían en nosotros</h2>
          <p>Negocios reales que han transformado sus ventas</p>
        </div>

        <div className="trust-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="trust-brands">
          <p className="brands-label">Trabajamos con empresas de todos los tamaños</p>
          <div className="brands-grid">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="brand-placeholder">
                <div className="brand-logo">Logo {index}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
