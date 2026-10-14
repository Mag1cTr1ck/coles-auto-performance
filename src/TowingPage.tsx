import { IconPhone, IconWhatsApp, ServiceIcon } from './icons'
import { useRequest } from './request'
import { Seo } from './Seo'
import { roadsideList, site, telHref, towCards, waHref } from './site'

export function TowingPage() {
  const { openRequest } = useRequest()

  return (
    <>
      <Seo
        title="Towing"
        description="C-Haul Towing — 24/7 Grand Cayman tow truck, accident recovery, jump starts, fuel delivery, and roadside assistance. Call now."
      />
      <section className="hero compact">
        <div className="hero-media" aria-hidden>
          <img src="/media/tow-truck.jpg" alt="" />
          <div className="hero-shade" />
        </div>
        <div className="wrap hero-copy">
          <p className="kicker">C-Haul Towing · 24/7</p>
          <h1>
            Call.
            <span> We haul.</span>
          </h1>
          <p className="lead">
            24/7 towing, recovery, and roadside assistance across Grand Cayman. Damage-aware
            loading, clear communication, and a shop that can take the vehicle the same night.
          </p>
          <div className="hero-actions">
            <a className="btn btn-lime" href={telHref()}>
              <IconPhone className="icon icon-red" />
              Call Now
            </a>
            <a className="btn btn-ghost" href={waHref('Tow needed. I will share my pin.')}>
              <IconWhatsApp className="icon" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="card-grid two">
          {towCards.map((c) => (
            <article key={c.title} className="dark-card">
              <span className="icon-chip">
                <ServiceIcon name={c.icon} className="icon" />
              </span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap">
        <article className="lime-card">
          <p className="kicker dark">24/7 towing</p>
          <h2>Stranded? C-Haul is already moving.</h2>
          <ul className="checks">
            {roadsideList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="hero-actions">
            <a className="btn btn-dark" href={telHref()}>
              Call Now
            </a>
            <button className="btn btn-ghost-dark" type="button" onClick={() => openRequest({ category: 'tow' })}>
              Request a Tow
            </button>
          </div>
        </article>
      </section>

      <section className="wrap section">
        <p className="kicker">Need a tow?</p>
        <h2>One call gets {site.towName} moving.</h2>
        <a className="btn btn-lime btn-lg" href={telHref()}>
          Call Now
        </a>
      </section>
    </>
  )
}
