import { Link } from 'react-router-dom'
import { useRequest } from './request'
import { Seo } from './Seo'
import { dvdlChecklist, dvdlChecks, dvdlPrep, site } from './site'

export function DvdlPage() {
  const { openRequest } = useRequest()

  return (
    <>
      <Seo
        title="DVDL Pre-service and Inspection"
        description="Cole’s pre-services the car, then takes it to the DVDL inspection center in Grand Cayman. The center does the inspection. Book the pre-service and the trip."
      />
      <section className="page-hero wrap">
        <p className="kicker">DVDL inspection checklist</p>
        <h1>Make sure your vehicle passes the first time.</h1>
        <p className="lead">
          We service your vehicle, take it through the DVDL inspection, and return it ready to go.
          This checklist shows what inspectors check on the day — just include the original logbook
          and valid insurance when you drop off the car and we will take care of the rest.
        </p>
        <div className="hero-actions">
          <button className="btn btn-lime" type="button" onClick={() => openRequest({ serviceId: 'dvdl', category: 'shop' })}>
            Book DVDL pre-service and inspection
          </button>
          <button
            className="btn btn-ghost"
            type="button"
            onClick={() => openRequest({ serviceId: 'health-inspection', category: 'shop' })}
          >
            Book a safety check
          </button>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <p className="kicker">Before you come in</p>
          <h2>What DVDL looks for.</h2>
          <p className="muted">
            Work through the list, or let the shop do it. Failed items must be fixed before a pass.
          </p>
        </div>
        <div className="card-grid two">
          {dvdlChecklist.map((group) => (
            <article key={group.n} className="dark-card">
              <p className="kicker">{group.n}</p>
              <h3>{group.title}</h3>
              <ul className="checks light">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {'tip' in group && group.tip ? <p className="check-tip">{group.tip}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <p className="kicker">DVDL inspection</p>
          <h2>A service that gets your car inspected.</h2>
          <p className="muted">
            We pre-service the vehicle at Barnes Drive, take it through DVDL, and return it ready.
            You skip the line; we handle the paperwork. Review this checklist to see what inspectors
            check, and send the original logbook and valid insurance with the car.
          </p>
        </div>
        <div className="card-grid two">
          {dvdlChecks.map((item) => (
            <article key={item.title} className="dark-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="hero-actions section-actions">
          <button
            className="btn btn-lime"
            type="button"
            onClick={() => openRequest({ serviceId: 'dvdl', category: 'shop' })}
          >
            Book DVDL pre-service and inspection
          </button>
        </div>
        <p className="fine">
          Official tint rules are set by DVDL. Illegal tint fails at the center. Shop: {site.address}.
        </p>
      </section>

      <section className="wrap section">
        <article className="roadside-band">
          <div className="roadside-copy">
            <p className="kicker dark">Book the trip</p>
            <h2>Pre-service, then we take it to the center.</h2>
            <p>We get the car ready, then take it to DVDL. Book online at {site.websiteDisplay}.</p>
            <div className="hero-actions">
              <button
                className="btn btn-dark"
                type="button"
                onClick={() => openRequest({ serviceId: 'dvdl', category: 'shop' })}
              >
                Book DVDL pre-service and inspection
              </button>
              <Link className="btn btn-ghost-dark" to="/book?service=dvdl&type=shop">
                Book online
              </Link>
            </div>
          </div>
          <ul className="roadside-grid">
            {dvdlPrep.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </>
  )
}
