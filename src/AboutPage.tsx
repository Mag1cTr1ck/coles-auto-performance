import { Seo } from './Seo'
import { equipment, site, team } from './site'

export function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Cole’s Auto is a service shop on Barnes Drive, George Town — diagnostics, maintenance, repairs, EV work, and C-Haul Towing. Pickup from Savannah to West Bay."
      />
      <section className="page-hero wrap">
        <p className="kicker">About us</p>
        <h1>A service shop. Not a sales lot.</h1>
        <p className="lead">
          {site.shopName} is a service shop on Barnes Drive — diagnostics, scheduled maintenance,
          and repairs for everyday Cayman cars, plus EV and hybrid work. {site.towName} is the 24/7
          recovery arm. Same number.
        </p>
      </section>

      <section className="wrap section">
        <div className="split">
          <img className="round-img" src="/media/shop-bay.jpg" alt="Cole’s Auto workshop" />
          <div>
            <p className="kicker">The service shop</p>
            <h2>Quality service, performed by certified technicians.</h2>
            <p>
              Oil changes, inspections, diagnostics, and repairs — that is the work. Factory scan
              tools, OEM information, and a full service bay. Pickup and delivery from Savannah to
              West Bay, as far as Spotts. Weekdays 8:00 AM – 6:00 PM; weekends by appointment.
            </p>
            <p>{site.address}</p>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <p className="kicker">Equipment</p>
        <h2>The tools the job actually needs.</h2>
        <ul className="checks light">
          {equipment.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="wrap section">
        <p className="kicker">Team</p>
        <h2>The people who work the car.</h2>
        <div className="card-grid two">
          {team.map((member) => (
            <article key={member.name} className="dark-card">
              <p className="tiny">{member.role}</p>
              <h3>{member.name}</h3>
              <p>{member.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
