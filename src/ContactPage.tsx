import { Link } from 'react-router-dom'
import { IconPhone, IconWhatsApp } from './icons'
import { Seo } from './Seo'
import { SocialLinks } from './SocialLinks'
import { site, telHref, waHref } from './site'

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Phone 345-936-2653, WhatsApp, email, hours, and map for Cole’s Auto Performance Ltd on Barnes Drive, George Town. 24/7 C-Haul towing."
      />
      <section className="page-hero wrap">
        <p className="kicker">Contact</p>
        <h1>Talk to dispatch or the shop.</h1>
        <p className="lead">{site.address}</p>
        <div className="hero-actions">
          <a className="btn btn-lime" href={telHref()}>
            <IconPhone className="icon icon-red" />
            Call Now
          </a>
          <a className="btn btn-ghost" href={waHref()}>
            <IconWhatsApp className="icon" />
            WhatsApp Us
          </a>
          <a className="btn btn-ghost" href={`mailto:${site.email}`}>
            Email
          </a>
          <SocialLinks />
        </div>
      </section>

      <section className="wrap section">
        <div className="card-grid two">
          <article className="dark-card">
            <p className="kicker">Shop hours</p>
            <ul className="plain">
              {site.hours.shop.map((h) => (
                <li key={h.days}>
                  <strong>{h.days}</strong>
                  <div>{h.time}</div>
                </li>
              ))}
            </ul>
            <p className="muted">{site.hours.tow}</p>
          </article>
          <article className="dark-card">
            <p className="kicker">Direct lines</p>
            <ul className="plain">
              <li>
                Phone / WhatsApp
                <div>
                  <a href={telHref()}>{site.phoneDisplay}</a>
                </div>
              </li>
              <li>
                Email
                <div>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </li>
              <li>
                Website
                <div>
                  <a href={site.website} target="_blank" rel="noreferrer">
                    {site.websiteDisplay}
                  </a>
                </div>
              </li>
              <li>
                Instagram
                <div>
                  <a href={site.instagram} target="_blank" rel="noreferrer">
                    {site.instagramHandle}
                  </a>
                </div>
              </li>
              <li>
                Facebook
                <div>
                  <a href={site.facebook} target="_blank" rel="noreferrer">
                    Cole’s Auto on Facebook
                  </a>
                </div>
              </li>
              <li>
                Book or pay
                <div>
                  <Link to="/book">Book service</Link>
                  {' · '}
                  <Link to="/pay">Pay online</Link>
                </div>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="map-wrap">
        <iframe title="Cole’s Auto on Google Maps" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
    </>
  )
}
