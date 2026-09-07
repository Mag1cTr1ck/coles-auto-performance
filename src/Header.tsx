import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IconClose, IconMenu, IconPhone } from './icons'
import { Logo } from './Logo'
import { useRequest } from './request'
import { site, telHref } from './site'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/tires', label: 'Tires' },
  { to: '/mobile', label: 'Mobile' },
  { to: '/towing', label: 'Towing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const { openRequest } = useRequest()
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menu])

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand" onClick={() => setMenu(false)}>
          <Logo />
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/book">Book</NavLink>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={telHref()}>
            <IconPhone className="icon icon-red" />
            <span className="hide-sm">{site.phoneDisplay}</span>
            <span className="show-sm">Call</span>
          </a>
          <button className="btn btn-lime btn-sm btn-request" type="button" onClick={() => openRequest()}>
            <span className="hide-sm">Request Tow / Mobile</span>
            <span className="show-sm">Tow / Mobile</span>
          </button>
          <button
            className="icon-btn menu-btn"
            type="button"
            aria-label={menu ? 'Close menu' : 'Open menu'}
            onClick={() => setMenu((v) => !v)}
          >
            {menu ? <IconClose className="icon" /> : <IconMenu className="icon" />}
          </button>
        </div>
      </div>

      {menu ? (
        <div className="nav-sheet">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setMenu(false)}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/dvdl" onClick={() => setMenu(false)}>
            DVDL inspection
          </Link>
          <Link to="/ev-battery" onClick={() => setMenu(false)}>
            EV batteries
          </Link>
          <a href={telHref()} onClick={() => setMenu(false)}>
            Call {site.phoneDisplay}
          </a>
          <Link to="/book" onClick={() => setMenu(false)}>
            Book service
          </Link>
          <Link to="/pay" onClick={() => setMenu(false)}>
            Pay online
          </Link>
        </div>
      ) : null}
    </header>
  )
}
