import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { SocialLinks } from './SocialLinks'
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
            repairs, and roadside help from Barnes Drive.
          </p>
          <div className="hero-actions">
            <a className="btn btn-lime" href={telHref()}>
              Call Now
            </a>
            <Link className="btn btn-ghost" to="/book">
              Book service
            </Link>
          </div>
          <SocialLinks />
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
            <li>{site.address}</li>
          </ul>
        </div>

        <div>
          <p className="kicker">Hours</p>
          <ul className="plain">
            {site.hours.shop.map((h) => (
              <li key={h.days}>
                <strong>{h.days}</strong>
                <div>{h.time}</div>
              </li>
            ))}
            <li>
              <strong>{site.towName}</strong>
              <div>24/7</div>
            </li>
          </ul>
        </div>

        <div>
          <p className="kicker">Menu</p>
          <ul className="plain">
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/dvdl">DVDL inspection</Link>
            </li>
            <li>
              <Link to="/ev-battery">EV batteries</Link>
            </li>
            <li>
              <Link to="/fleet">Fleet</Link>
            </li>
            {features.tires ? (
              <li>
                <Link to="/tires">Tires</Link>
              </li>
            ) : null}
            <li>
              <Link to="/mobile">Mobile</Link>
            </li>
            <li>
              <Link to="/towing">Towing</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/book">Book</Link>
            </li>
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
