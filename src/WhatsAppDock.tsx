import { createContext, useContext, useEffect, useId, useState, type FormEvent, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconClose, IconPhone, IconWhatsApp } from './icons'
import { site, telHref, waHref } from './site'

const defaultMessage = 'Hi, I need help with '

const quickReplies = [
  { label: 'Towing', text: 'I need help with towing. I will share my pin.' },
  { label: 'a mobile mechanic', text: 'I need help with a mobile mechanic visit.' },
  { label: 'a shop service', text: 'I need help with a shop service.' },
  { label: 'fleet service', text: 'I need help with fleet service.' },
  { label: 'an emergency', text: 'Emergency. I need help. I will share my pin.' },
] as const

const profileServices = [
  { label: 'Shop', to: '/services' },
  { label: 'Mobile', to: '/mobile' },
  { label: 'Towing', to: '/towing' },
  { label: 'Fleet', to: '/fleet' },
] as const

type DockContext = {
  open: boolean
  toggle: () => void
  close: () => void
}

const WhatsAppContext = createContext<DockContext | null>(null)

export function useWhatsAppDock() {
  const ctx = useContext(WhatsAppContext)
  if (!ctx) throw new Error('useWhatsAppDock must be used inside WhatsAppProvider')
  return ctx
}

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const value = {
    open,
    toggle: () => setOpen((v) => !v),
    close: () => setOpen(false),
  }

  return <WhatsAppContext.Provider value={value}>{children}</WhatsAppContext.Provider>
}

export function WhatsAppDock() {
  const { open, toggle, close } = useWhatsAppDock()
  const titleId = useId()
  const [message, setMessage] = useState(defaultMessage)

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  function send(e: FormEvent) {
    e.preventDefault()
    const text = message.trim()
    if (!text) return
    window.open(waHref(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {open ? (
        <>
          <button className="wa-scrim" type="button" aria-label="Close WhatsApp" onClick={close} />
          <section className="wa-panel" role="dialog" aria-modal="true" aria-labelledby={titleId}>
            <div className="wa-profile">
              <div className="wa-profile-top">
                <p className="kicker">WhatsApp</p>
                <button className="wa-close" type="button" aria-label="Close" onClick={close}>
                  <IconClose className="icon" />
                </button>
              </div>
              <h2 id={titleId}>{site.shopShort}</h2>
              <p className="wa-tag">{site.brandTitle}</p>

              <p className="wa-label">Hours</p>
              <ul className="wa-list">
                {site.hours.shop.map((h) => (
                  <li key={h.days}>
                    <strong>{h.days}</strong>
                    <span>{h.time}</span>
                  </li>
                ))}
                <li>
                  <strong>{site.towName}</strong>
                  <span>24/7</span>
                </li>
              </ul>

              <p className="wa-label">Services</p>
              <ul className="wa-services">
                {profileServices.map((s) => (
                  <li key={s.to}>
                    <Link to={s.to} onClick={close}>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="wa-label">Location</p>
              <p className="wa-location">{site.addressShort}</p>
              <Link className="text-link" to="/contact" onClick={close}>
                Map & hours
              </Link>

              <a className="btn btn-lime" href={telHref()}>
                <IconPhone className="icon icon-red" />
                Call {site.phoneDisplay}
              </a>
            </div>

            <div className="wa-chat">
              <p className="wa-label">I need help with…</p>
              <div className="wa-replies">
                {quickReplies.map((reply) => (
                  <a
                    key={reply.label}
                    className="wa-reply"
                    href={waHref(reply.text)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMessage(reply.text)}
                  >
                    {reply.label}
                  </a>
                ))}
              </div>
              <form onSubmit={send}>
                <label className="wa-compose-label" htmlFor="wa-message">
                  WhatsApp chat
                </label>
                <textarea
                  id="wa-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button className="btn btn-wa btn-block" type="submit">
                  <IconWhatsApp className="icon" />
                  Open WhatsApp
                </button>
              </form>
            </div>
          </section>
        </>
      ) : null}
      <button
        className="fab-wa"
        type="button"
        aria-expanded={open}
        aria-controls={open ? titleId : undefined}
        onClick={toggle}
      >
        <IconWhatsApp className="icon" />
        WhatsApp
      </button>
    </>
  )
}
