import { Link } from 'react-router-dom'
import { IconPhone, IconWhatsApp } from './icons'
import { RequestModal } from './RequestModal'
import { Seo } from './Seo'
import { site, telHref, waHref } from './site'

const steps = [
  {
    n: '01',
    title: 'Tell us the vehicles',
    text: 'How many, where they sit, and what you need kept current — oil, inspections, or a repair that is already due.',
  },
  {
    n: '02',
    title: 'We assess and quote',
    text: 'Pricing follows make, model, condition, and the work. You get the quote before we spend.',
  },
  {
    n: '03',
    title: 'Service on a plan',
    text: 'Barnes Drive shop, weekday pickup, or a check at the office or yard. You hear the plan before work starts.',
  },
]

const groups = [
  {
    title: 'Scheduled service',
    items: [
      'Oil and filter service, quoted by vehicle and oil spec',
      'Fluids, brakes, batteries, and wipers',
      'Work timed around how the vehicles are used',
    ],
  },
  {
    title: 'Inspections',
    items: [
      'Free Cayman DVDL inspection',
      'Safety and chassis walk-around',
      'A clear list of what is due before any repair',
    ],
  },
  {
    title: 'Repairs',
    items: [
      'Diagnostics with factory scan tools',
      'Engine, brakes, A/C, electrical, and drivetrain',
      'EV, hybrid, and light-duty diesel when the fleet includes them',
    ],
  },
  {
    title: 'Getting vehicles in',
    items: [
      'Pickup and delivery, Savannah to West Bay, as far as Spotts',
      'Inspections at the office or yard',
      'Non-starts come in on C-Haul',
    ],
  },
]

export function FleetPage() {
  return (
    <>
      <Seo
        title="Fleet Service"
        description="Fleet maintenance in Grand Cayman for company cars and light commercial vehicles. Scheduled service, inspections, and repairs at Barnes Drive, with pickup and on-site checks."
      />
      <section className="page-hero wrap">
        <p className="kicker">Fleet service</p>
        <h1>Company vehicles, kept on the road.</h1>
        <p className="lead">
          Scheduled service, inspections, and repairs for company cars and light commercial fleets.
          The shop is on Barnes Drive. Pickup runs Savannah to West Bay, as far as Spotts. Checks
          can happen at the office or yard.
        </p>
        <div className="hero-actions">
          <a className="btn btn-lime" href={telHref()}>
            <IconPhone className="icon icon-red" />
            Call Now
          </a>
          <a
            className="btn btn-ghost"
            href={waHref('Hi, I need fleet service for company vehicles on Grand Cayman.')}
          >
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
        <div className="split">
          <img className="round-img" src="/media/fleet.jpg" alt="Company vehicles at Cole’s Auto" />
          <div>
            <p className="kicker">What a fleet booking covers</p>
            <h2>The same shop. A schedule that fits the vehicles.</h2>
            <p>
              One team handles the service, the inspection, and the tow-in if a vehicle will not
              move. Weekdays 8:00 AM – 6:00 PM. Weekends by appointment. {site.towName} is 24/7.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="card-grid two">
          {groups.map((group) => (
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
        <div className="hero-actions section-actions">
          <Link className="btn btn-ghost" to="/dvdl">
            DVDL checklist
          </Link>
          <Link className="btn btn-ghost" to="/mobile">
            Mobile mechanic
          </Link>
          <Link className="btn btn-ghost" to="/towing">
            Towing
          </Link>
        </div>
        <p className="fine price-note">
          Company cars and light commercial vehicles. Quotes follow an assessment of the vehicle or
          a review of the requested work. Diagnostic and inspection fees may apply. Prices are in
          CI$. DVDL inspection is free. We are a service shop — not a body or paint shop.
        </p>
      </section>

      <section className="wrap section">
        <RequestModal embedded preset={{ serviceId: 'fleet', category: 'shop' }} />
        <p className="fine">Shop: {site.address}</p>
      </section>
    </>
  )
}
