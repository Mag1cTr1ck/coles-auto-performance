import { Link } from 'react-router-dom'
import { IconCard, IconPhone, IconWhatsApp, ServiceIcon } from './icons'
import { useRequest } from './request'
import { Seo } from './Seo'
import {
  districts,
  features,
  publicPillars,
  roadsideList,
  telHref,
  towCards,
  values,
  waHref,
  workShots,
} from './site'

export function Home() {
  const { openRequest } = useRequest()

  return (
    <>
      <Seo
        description={
          features.tires
            ? "Cole's AUTO | MOBILE | TOWING | TIRES — Cayman service shop, mobile mechanic, tires, and 24/7 towing. Book or call 345-936-2653."
            : "Cole's AUTO | MOBILE | TOWING — Cayman service shop, mobile mechanic, and 24/7 towing. Book or call 345-936-2653."
        }
      />

      <section className="hero">
        <div className="hero-media" aria-hidden>
          <img src="/media/tow-truck.jpg" alt="" />
          <div className="hero-shade" />
        </div>
        <div className="wrap hero-copy">
          <p className="kicker">
            {features.tires
              ? 'Grand Cayman service shop · mobile · towing · tires'
              : 'Grand Cayman service shop · mobile · towing'}
          </p>
          <h1 className="hero-lines">
            We Haul.
            <br />
            We Service.
            <br />
            We Tow.
            <br />
            <span>We Roll.</span>
          </h1>
          <p className="lead">
            {features.tires
              ? 'From diagnostics and maintenance to mobile repairs, towing, and tires — Cole’s keeps Cayman moving.'
              : 'From diagnostics and maintenance to mobile repairs and towing — Cole’s keeps Cayman moving.'}
          </p>
          <div className="hero-actions">
            <a className="btn btn-lime" href={telHref()}>
              <IconPhone className="icon icon-red" />
              Call Now
            </a>
            <a className="btn btn-ghost" href={waHref('Hi, I need help on Grand Cayman.')}>
              <IconWhatsApp className="icon" />
              WhatsApp Us
            </a>
            <Link className="btn btn-ghost" to="/pay">
              <IconCard className="icon" />
              Pay online
            </Link>
          </div>
        </div>
      </section>

      <section className="stats wrap">
        <div>
          <strong>24/7</strong>
          <span>Roadside Support</span>
        </div>
        <div>
          <strong>Fast</strong>
          <span>Response</span>
        </div>
        <div>
          <strong>Safe</strong>
          <span>Vehicle Transport</span>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <p className="kicker">How we help</p>
          <h2 className="line-title">
            {features.tires ? 'Service. Tires. Mobile. Tow.' : 'Service. Mobile. Tow.'}
          </h2>
          <p className="muted">
            {features.tires
              ? 'Book the service shop, fit new tires, request pickup, or call for a tow. Same team, one number.'
              : 'Book the service shop, request pickup, or call for a tow. Same team, one number.'}
          </p>
        </div>
        <div className={features.tires ? 'card-grid two' : 'card-grid three'}>
          {publicPillars().map((p) => (
            <article key={p.id} className="shot-card">
              <img src={p.image} alt="" />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <Link className="text-link" to={p.href}>
                {p.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {features.tires ? (
      <section className="wrap section" id="tires">
        <div className="split">
          <img className="round-img" src="/media/roadside.jpg" alt="Tire sales and fitting at Cole’s Auto" />
          <div>
            <p className="kicker">Tires</p>
            <h2>Tire sales and fitting.</h2>
            <p>
              Need new rubber? Cole’s sells and fits tires at the Barnes Drive service shop —
              mounted, balanced, and checked so you leave road-ready.
            </p>
            <ul className="checks light">
              <li>New tire sales for cars, SUVs, and light trucks</li>
              <li>Professional fitting, mounting, and wheel balancing</li>
              <li>TPMS sensors and a safety check before you go</li>
              <li>Tread advice for Cayman heat, rain, and DVDL</li>
            </ul>
            <div className="hero-actions">
              <button
                className="btn btn-lime"
                type="button"
                onClick={() => openRequest({ serviceId: 'tires', category: 'shop' })}
              >
                Book tire fitting
              </button>
              <Link className="btn btn-ghost" to="/tires">
                Tire details
              </Link>
            </div>
          </div>
        </div>
      </section>
      ) : null}

      <section className="wrap section">
        <div className="section-head">
          <p className="kicker">What we do</p>
          <h2>Towing that covers more.</h2>
          <p className="muted">
            24/7 recovery, roadside help, and tow-in to Service centre — then the shop finishes the
            job.
          </p>
        </div>
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
        <div className="hero-actions section-actions">
          <button className="btn btn-lime" type="button" onClick={() => openRequest({ category: 'tow' })}>
            Request a Tow
          </button>
          <Link className="btn btn-ghost" to="/towing">
            Towing details
          </Link>
        </div>
      </section>

      <section className="wrap section">
        <article className="roadside-band">
          <div className="roadside-copy">
            <p className="kicker dark">Roadside assistance · 24/7</p>
            <h2>
              Stuck?
              <br />
              We come to you.
            </h2>
            <p>
              You do not always need a full tow. We handle jump starts, flats, lockouts, and fuel on
              the spot — then tow in if the car will not move.
            </p>
            <div className="hero-actions">
              <button
                className="btn btn-dark"
                type="button"
                onClick={() => openRequest({ serviceId: 'roadside' })}
              >
                Request Tow / Mobile
              </button>
              <a className="btn btn-ghost-dark" href={telHref()}>
                Call Now
              </a>
            </div>
          </div>
          <ul className="roadside-grid">
            {roadsideList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="wrap section">
        <div className="photo-frame">
          <img src="/media/performance.jpg" alt="Vehicle in for service at Cole’s Auto" />
          <p>Cole’s on the job — service bay, recoveries, and island pickups.</p>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <p className="kicker">Our work</p>
          <h2>
            {features.tires
              ? 'Shop, tires, mobile, and tow — in Cayman.'
              : 'Shop, mobile, and tow — in Cayman.'}
          </h2>
          <p className="muted">
            Pickups, recoveries, roadside calls, shop work, and customer vehicles across Grand
            Cayman.
          </p>
        </div>
        <div className="card-grid three">
          {workShots.map((shot) => (
            <figure key={shot.label} className="shot-card">
              <img src={shot.src} alt={shot.caption} />
              <figcaption>
                <strong>{shot.label}</strong>
                <span>{shot.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="light-band">
        <div className="wrap section">
          <div className="section-head">
            <p className="kicker">Why Cole’s</p>
            <h2>Professional from pickup to drop-off.</h2>
            <p className="muted">
              Fast response, local coverage, and a service shop that can actually fix what we tow
              in.
            </p>
          </div>
          <div className="card-grid two">
            {values.map((v) => (
              <article key={v.title} className="white-card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cayman-band">
        <video autoPlay muted loop playsInline poster="/media/cayman-water.jpg">
          <source src="/media/cayman-loop.mp4" type="video/mp4" />
        </video>
        <div className="wrap cayman-copy">
          <p className="kicker">Service area</p>
          <h2>Grand Cayman coverage.</h2>
          <p>
            Island-wide towing and pickup — George Town shop on Barnes Drive, courtesy runs from
            Savannah to West Bay (as far as Spotts), and 24/7 C-Haul for the rest of the island.
          </p>
          <ul className="chip-list">
            {districts.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <Link className="btn btn-lime" to="/contact">
            Map & hours
          </Link>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <p className="kicker">Simple online payments</p>
          <h2>Pay for shop, mobile, or towing online.</h2>
          <p className="lead">
            Request a secure payment link for an invoice or job reference. This site never stores
            card details.
          </p>
        </div>
        <div className="mini-grid">
          <span>Credit / Debit Card</span>
          <span>Secure Payment Link</span>
          <span>Invoice Payment</span>
          <span>Mobile Friendly</span>
        </div>
        <Link className="btn btn-lime" to="/pay">
          Pay online
        </Link>
      </section>

      <section className="wrap section cta-end">
        <div className="section-head">
          <p className="kicker">Need a tow or a mobile call-out?</p>
          <h2>One call gets Cole’s moving.</h2>
          <p className="lead">Phone, WhatsApp, and a simple request form — always one tap away.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-lime btn-lg" href={telHref()}>
            <IconPhone className="icon icon-red" />
            Call Now
          </a>
          <a className="btn btn-ghost btn-lg" href={waHref('Hi, sharing my location for pickup.')}>
            <IconWhatsApp className="icon" />
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  )
}
