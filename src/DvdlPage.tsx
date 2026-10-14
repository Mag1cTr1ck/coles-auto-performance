import { Link } from 'react-router-dom'
import { useRequest } from './request'
import { Seo } from './Seo'
import { dvdlChecklist, dvdlChecks, dvdlPrep, site } from './site'

export function DvdlPage() {
  const { openRequest } = useRequest()

  return (
    <>
      <Seo
        title="DVDL Inspection Checklist"
        description="Free Cayman DVDL inspection on Barnes Drive. Use this checklist for lights, tires, brakes, fluids, documents, and more — then book a routine service so you pass the first time."
      />
      <section className="page-hero wrap">
        <p className="kicker">DVDL inspection checklist</p>
        <h1>Make sure your vehicle passes the first time.</h1>
        <p className="lead">
          A routine service before your DVDL inspection helps catch small issues before they become
          expensive failures. Cole’s inspection is free. Use this checklist to confirm the vehicle
          is ready — then bring the original logbook and valid insurance.
        </p>
        <div className="hero-actions">
          <button className="btn btn-lime" type="button" onClick={() => openRequest({ serviceId: 'dvdl' })}>
            Book DVDL
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
          <p className="kicker">Shop rules</p>
          <h2>How we inspect at Barnes Drive.</h2>
        </div>
        <div className="card-grid two">
          {dvdlChecks.map((item) => (
            <article key={item.title} className="dark-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <p className="fine">
          Official tint rules are set by DVDL. We will not pass illegal tint. Shop: {site.address}.
        </p>
      </section>

      <section className="wrap section">
        <article className="roadside-band">
          <div className="roadside-copy">
            <p className="kicker dark">Get inspection-ready</p>
            <h2>A quick routine service covers the list.</h2>
            <p>Get inspection-ready with confidence. Book online at {site.websiteDisplay}.</p>
            <div className="hero-actions">
              <button
                className="btn btn-dark"
                type="button"
                onClick={() => openRequest({ serviceId: 'oil', category: 'shop' })}
              >
                Book service
              </button>
              <Link className="btn btn-ghost-dark" to="/book">
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
