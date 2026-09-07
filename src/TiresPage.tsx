import { Link } from 'react-router-dom'
import { useRequest } from './request'
import { Seo } from './Seo'
import { site, telHref } from './site'

const points = [
  'New tire sales for cars, SUVs, and light trucks',
  'Professional fitting, mounting, and wheel balancing',
  'TPMS sensors and a safety check before you go',
  'Tread advice for Cayman heat, rain, and DVDL',
]

export function TiresPage() {
  const { openRequest } = useRequest()

  return (
    <>
      <Seo
        title="Tires"
        description="Tire sales and fitting at Cole’s service shop on Barnes Drive, George Town. Mounting, balancing, TPMS, and a road-ready check."
      />
      <section className="page-hero wrap">
        <p className="kicker">Tire sales and fitting</p>
        <h1>New tires. Fitted here.</h1>
        <p className="lead">
          Cole’s sells and fits tires at the Barnes Drive service shop — mounted, balanced, and
          checked so you leave road-ready.
        </p>
        <div className="hero-actions">
          <button
            className="btn btn-lime"
            type="button"
            onClick={() => openRequest({ serviceId: 'tires', category: 'shop' })}
          >
            Book tire fitting
          </button>
          <a className="btn btn-ghost" href={telHref()}>
            Call Now
          </a>
        </div>
      </section>

      <section className="wrap section">
        <div className="split">
          <img className="round-img" src="/media/roadside.jpg" alt="Tire sales and fitting at Cole’s Auto" />
          <div>
            <p className="kicker">In the shop</p>
            <h2>Quoted by size. Fitted the same visit when stock allows.</h2>
            <ul className="checks light">
              {points.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="muted">{site.address}</p>
            <Link className="btn btn-ghost" to="/services">
              All services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
