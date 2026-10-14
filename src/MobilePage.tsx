import { IconPhone, IconWhatsApp } from './icons'
import { RequestModal } from './RequestModal'
import { Seo } from './Seo'
import { districts, features, site, telHref, waHref } from './site'

const visitGroups = [
  {
    title: 'Get you moving',
    items: [
      'Jump starts',
      'Battery test, charge, and replacement',
      'No-start checks — if it will not crank, we tow in',
      'Flat tire — spare change or a safe plug',
      'Lockout assistance',
      'Fuel delivery',
      'Fuses, bulbs, and light failures',
    ],
  },
  {
    title: 'Diagnose on site',
    items: [
      'Scan diagnostics and warning-light readout',
      'Charging-system and electrical checks',
      'Overheating and cooling-system check',
      'A/C performance check',
      'Starter and alternator testing',
    ],
  },
  {
    title: 'Upkeep at your place',
    items: [
      'Fluid top-up — oil, coolant, brake, and washer',
      'Brake visual inspection',
      'Wipers and visible belt condition',
      'Pre-trip and safety walk-around',
      'Fleet inspections at the office or yard',
      ...(features.tires ? ['Advice on tire sales and shop fitting'] : []),
    ],
  },
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
        description="Mobile mechanic visits across Grand Cayman — jump starts, batteries, scan diagnostics, fluids, lights, and on-site checks. Book a visit or WhatsApp your location."
      />
      <section className="page-hero wrap">
        <p className="kicker">Mobile mechanic</p>
        <h1>We come to you.</h1>
        <p className="lead">
          A Cole’s tech comes to your home, office, hotel, or pin. We handle the jobs that do not
          need a lift. Pickup still runs Savannah to West Bay, as far as Spotts. If the car will
          not start, we send the truck.
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
        <div className="section-head">
          <p className="kicker">Mobile mechanic visit</p>
          <h2>What we do on site.</h2>
          <p className="muted">
            Common parts and test gear travel with the tech. Major mechanical work, alignment, and
            anything that needs a lift goes to Barnes Drive.
          </p>
        </div>
        <div className="card-grid three">
          {visitGroups.map((group) => (
            <article key={group.title} className="dark-card">
              <h3>{group.title}</h3>
              <ul className="checks light">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
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
        <RequestModal embedded preset={{ category: 'mobile' }} />
        <p className="fine">Shop fallback: {site.address}</p>
      </section>
    </>
  )
}
