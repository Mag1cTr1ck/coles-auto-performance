import { IconPhone, IconWhatsApp } from './icons'
import { RequestModal } from './RequestModal'
import { Seo } from './Seo'
import { districts, features, site, telHref, waHref } from './site'

const onSite = [
  'Battery test and replacement',
  'Jump starts and no-start checks',
  'Flat tire change (if a spare is usable)',
  ...(features.tires ? ['Advice on tire sales and shop fitting'] : []),
  'Fluid top-up and inspection',
  'Brake and light safety checks',
  'Scan diagnostics and advice',
  'A/C performance check',
  'Fleet walk-around inspections',
]

const steps = [
  {
    n: '01',
    title: 'Tell us where you are',
    text: 'Share a pin, hotel, office, or street. WhatsApp is fastest.',
  },
  {
    n: '02',
    title: 'We dispatch a tech',
    text: 'A Cole’s mobile mechanic comes with tools, tests, and common parts.',
  },
  {
    n: '03',
    title: 'Fix on site or tow in',
    text: 'If it will not start, it is a tow-in — no exceptions. C-Haul takes it to Barnes Drive.',
  },
]

export function MobilePage() {
  return (
    <>
      <Seo
        title="Mobile"
        description="Mobile mechanic service across Grand Cayman. On-site repairs, diagnostics, and battery work. Book a visit or WhatsApp your location."
      />
      <section className="page-hero wrap">
        <p className="kicker">Mobile mechanic</p>
        <h1>We come to you.</h1>
        <p className="lead">
          Courtesy pickup and delivery from Savannah to West Bay, as far as Spotts. Stay reachable
          while the vehicle is in our care. If the car will not start, we send the truck.
        </p>
        <div className="hero-actions">
          <a className="btn btn-lime" href={telHref()}>
            <IconPhone className="icon icon-red" />
            Call Now
          </a>
          <a className="btn btn-ghost" href={waHref('Hi, I need a mobile call-out or pickup on Grand Cayman.')}>
            <IconWhatsApp className="icon" />
            WhatsApp Us
          </a>
        </div>
      </section>

      <section className="wrap section">
        <div className="card-grid three">
          {steps.map((s) => (
            <article key={s.n} className="dark-card">
              <p className="kicker">{s.n}</p>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="split-head">
          <div>
            <p className="kicker">On site</p>
            <h2>What we can finish without a bay.</h2>
          </div>
        </div>
        <ul className="checks light">
          {onSite.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="wrap section">
        <p className="kicker">Coverage</p>
        <h2>Grand Cayman, door to door.</h2>
        <ul className="chip-list">
          {districts.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <p className="muted">
          Pickup may be complimentary when combined with other shop work. After-hours is C-Haul
          dispatch.
        </p>
      </section>

      <section className="wrap section">
        <RequestModal embedded preset={{ category: 'mobile', serviceId: 'mobile-service' }} />
        <p className="fine">Shop fallback: {site.address}</p>
      </section>
    </>
  )
}
