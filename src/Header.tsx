import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { IconClose, IconMenu, IconPhone, IconWhatsApp } from './icons'
import { Logo } from './Logo'
import { useRequest } from './request'
import { SocialLinks } from './SocialLinks'
import { features, site, telHref, waHref } from './site'
import { useWhatsAppDock } from './WhatsAppDock'

const workLinks = [
  { to: '/services', label: 'Our Services' },
  { to: '/dvdl', label: 'DVDL inspection' },
  { to: '/ev-battery', label: 'EV batteries' },
  { to: '/fleet', label: 'Fleet' },
  ...(features.tires ? [{ to: '/tires', label: 'Tires' }] : []),
  { to: '/mobile', label: 'Mobile' },
  { to: '/towing', label: 'Towing' },
]

const shopLinks = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/book', label: 'Book' },
]

export function Header() {
  const { openRequest } = useRequest()
  const { toggle, open } = useWhatsAppDock()
  const location = useLocation()
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    setMenu(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menu])

  useEffect(() => {
    if (!menu) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenu(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menu])

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="brand" onClick={() => setMenu(false)}>
            <Logo />
          </Link>
          <NavLink to="/services" className="btn btn-lime btn-sm btn-request" onClick={() => setMenu(false)}>
            Our Services
          </NavLink>

          <div className="header-actions">
            <a className="header-phone" href={telHref()}>
              <IconPhone className="icon icon-red" />
              <span className="hide-sm">{site.phoneDisplay}</span>
              <span className="show-sm">Call</span>
            </a>
            <button
              className="header-wa"
              type="button"
              aria-label="WhatsApp"
              aria-expanded={open}
              onClick={toggle}
            >
              <IconWhatsApp className="icon" />
              <span className="hide-sm">WhatsApp</span>
            </button>
            <button className="btn btn-lime btn-sm btn-request" type="button" onClick={() => openRequest()}>
              <span className="hide-sm">Request Tow / Mobile</span>
              <span className="show-sm">Tow / Mobile</span>
            </button>
            <button
              className="btn btn-ghost btn-sm menu-btn"
              type="button"
              aria-label={menu ? 'Close menu' : 'Open menu'}
              aria-expanded={menu}
              onClick={() => setMenu((v) => !v)}
            >
              {menu ? <IconClose className="icon" /> : <IconMenu className="icon" />}
              <span className="hide-sm">{menu ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </div>
        <a
          className="emergency-bar"
          href={waHref('Emergency. I need help. I will share my pin.')}
          target="_blank"
          rel="noreferrer"
        >
          <span className="emergency-dot" aria-hidden />
          24/7 emergency available
        </a>

        {menu ? (
          <div className="nav-panel">
            <div className="nav-panel-inner">
              <div>
                <p className="kicker">Work</p>
                <NavLink to="/" end>
                  Home
                </NavLink>
                {workLinks.map((l) => (
                  <NavLink key={l.to} to={l.to}>
                    {l.label}
                  </NavLink>
                ))}
              </div>
              <div>
                <p className="kicker">Shop</p>
                {shopLinks.map((l) => (
                  <NavLink key={l.to} to={l.to}>
                    {l.label}
                  </NavLink>
                ))}
              </div>
              <div>
                <p className="kicker">Reach us</p>
                <a href={telHref()}>Call {site.phoneDisplay}</a>
                <a href={waHref()}>WhatsApp Us</a>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <SocialLinks />
              </div>
            </div>
          </div>
        ) : null}
      </header>
      {menu ? (
        <button className="nav-scrim" type="button" aria-label="Close menu" onClick={() => setMenu(false)} />
      ) : null}
    </>
  )
}
