import { Link } from 'react-router-dom'
import { useRequest } from './request'
import { Seo } from './Seo'
import { dvdlChecks, site } from './site'

export function DvdlPage() {
  const { openRequest } = useRequest()

  return (
    <>
      <Seo
        title="DVDL Inspection"
        description="Free Cayman DVDL inspection on Barnes Drive. Logbook, valid insurance, legal tint, and a dry-road brake test. Pickup available when combined with other service."
      />
      <section className="page-hero wrap">
        <p className="kicker">DVDL inspection</p>
        <h1>Free inspection. Roadworthy first.</h1>
        <p className="lead">
          Cole’s Auto performs DVDL inspections at no charge. Bring the original logbook and proof
          of valid insurance. The vehicle must be safe, legal, and ready for a dry-road brake test.
        </p>
        <div className="hero-actions">
          <button className="btn btn-lime" type="button" onClick={() => openRequest({ serviceId: 'dvdl' })}>
            Book DVDL
          </button>
          <Link className="btn btn-ghost" to="/services">
            All services
          </Link>
        </div>
      </section>

      <section className="wrap section">
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
    </>
  )
}
