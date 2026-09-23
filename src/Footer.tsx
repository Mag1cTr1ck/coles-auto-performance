import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { features, site, telHref, waHref } from './site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <div className="brand">
            <Logo className="logo-lg" />
          </div>
          <p className="muted">
            Service shop, mobile mechanic, and 24/7 {site.towName} in Grand Cayman — diagnostics,
            repairs{features.tires ? ', tires,' : ','} and roadside help from Barnes Drive.
          </p>
          <div className="hero-actions">
            <a className="btn btn-lime" href={telHref()}>
              Call Now
            </a>
            <Link className="btn btn-ghost" to="/book">
              Book service
            </Link>
          </div>
        </div>

        <div>
          <p className="kicker">Contact</p>
          <ul className="plain">
            <li>
              <a href={telHref()}>{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={waHref()}>WhatsApp Us</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.website} target="_blank" rel="noreferrer">
                {site.websiteDisplay}
              </a>
            </li>
            <li>
              <Link to="/pay">Pay online</Link>
            </li>
            <li>{site.address}</li>
          </ul>
        </div>

        <div>
          <p className="kicker">Coverage</p>
          <ul className="plain">
            <li>Grand Cayman</li>
            <li>Emergency roadside service</li>
            <li>Vehicle pickup & transport</li>
            {features.tires ? (
              <li>
                <Link to="/tires">Tire sales and fitting</Link>
              </li>
            ) : null}
            <li>Shop, mobile, and 24/7 tow</li>
          </ul>
        </div>
      </div>
      <p className="legal">
        © {new Date().getFullYear()} {site.shopName} · {site.towName}. Cayman mechanic, mobile
        mechanic, tow truck, and roadside assistance.
      </p>
    </footer>
  )
}
