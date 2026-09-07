import { Link } from 'react-router-dom'
import { useRequest } from './request'
import { Seo } from './Seo'
import { evNotes, evPricing } from './site'

export function EvPage() {
  const { openRequest } = useRequest()

  return (
    <>
      <Seo
        title="EV Battery"
        description="Nissan LEAF, e-NV200, BMW i3, Mitsubishi PHEV, and Toyota hybrid battery upgrades in Grand Cayman. Assessment first. Guideline prices in CI$."
      />
      <section className="page-hero wrap">
        <p className="kicker">EV & hybrid batteries</p>
        <h1>Range back. Vehicle assessed first.</h1>
        <p className="lead">
          High-voltage replacement and upgrades — including rebuilds around 60 kWh — after a full
          inspection of the rest of the car. No point putting a new pack in a vehicle that will not
          last.
        </p>
        <div className="hero-actions">
          <button className="btn btn-lime" type="button" onClick={() => openRequest({ serviceId: 'ev-battery' })}>
            Book EV assessment
          </button>
          <Link className="btn btn-ghost" to="/services">
            All services
          </Link>
        </div>
      </section>

      <section className="wrap section">
        <div className="card-grid two">
          {evPricing.map((pack) => (
            <article key={pack.title} className="dark-card">
              <h3>{pack.title}</h3>
              {pack.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <article className="lime-card">
          <p className="kicker dark">Before we order a pack</p>
          <h2>The whole vehicle has to earn the battery.</h2>
          <p>
            We inspect mechanical, electrical, suspension, steering, brakes, cooling, and drivetrain
            life before recommending a high-voltage job. Final pricing depends on year, chemistry,
            shipping, programming, and any extra parts the system needs.
          </p>
        </article>
      </section>

      <section className="wrap section">
        <ul className="checks light">
          {evNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
    </>
  )
}
