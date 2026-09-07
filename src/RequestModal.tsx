import { useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { IconClose } from './icons'
import { mailHref, services, site, waHref } from './site'

export type RequestPreset = {
  serviceId?: string
  category?: 'shop' | 'mobile' | 'tow'
}

type Props = {
  preset?: RequestPreset
  onClose?: () => void
  embedded?: boolean
}

const times = [
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  'ASAP / emergency',
]

function nextRef() {
  const n = Math.floor(1000 + Math.random() * 9000)
  return `CALL-${n}`
}

export function RequestModal({ preset, onClose, embedded }: Props) {
  const initialService =
    preset?.serviceId ??
    (preset?.category === 'tow'
      ? 'towing'
      : preset?.category === 'mobile'
        ? 'mobile-service'
        : preset?.category === 'shop'
          ? 'diagnostics'
          : 'mobile-service')

  const [serviceId, setServiceId] = useState(initialService)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('ASAP / emergency')
  const [locationType, setLocationType] = useState<'shop' | 'mobile' | 'tow'>(
    preset?.category ?? 'mobile',
  )
  const [address, setAddress] = useState('')
  const [year, setYear] = useState('')
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [plate, setPlate] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [done, setDone] = useState<string | null>(null)

  const selected = useMemo(
    () => services.find((s) => s.id === serviceId) ?? services[0],
    [serviceId],
  )

  function onServiceChange(id: string) {
    setServiceId(id)
    const svc = services.find((s) => s.id === id)
    if (svc) setLocationType(svc.category)
  }

  function pickNeed(kind: 'tow' | 'mobile' | 'shop') {
    if (kind === 'tow') {
      setServiceId('towing')
      setLocationType('tow')
      return
    }
    if (kind === 'shop') {
      setServiceId('diagnostics')
      setLocationType('shop')
      return
    }
    setServiceId('mobile-service')
    setLocationType('mobile')
  }

  function submit(e: FormEvent) {
    e.preventDefault()
    const ref = nextRef()
    const lines = [
      `${site.towName} / ${site.shopName} booking`,
      `Reference: ${ref}`,
      `Service: ${selected.name}`,
      `When: ${date || 'ASAP'} ${time}`,
      `Location type: ${locationType}`,
      address ? `Address / GPS: ${address}` : '',
      `Vehicle: ${year} ${make} ${model} ${plate}`.trim(),
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : '',
      notes ? `Notes: ${notes}` : '',
    ].filter(Boolean)

    const booking = {
      ref,
      createdAt: new Date().toISOString(),
      serviceId,
      date,
      time,
      locationType,
      address,
      year,
      make,
      model,
      plate,
      name,
      phone,
      email,
      notes,
    }

    try {
      const existing = JSON.parse(localStorage.getItem('coles-bookings') || '[]') as unknown[]
      localStorage.setItem('coles-bookings', JSON.stringify([booking, ...existing].slice(0, 30)))
    } catch {
      /* ignore */
    }

    const message = lines.join('\n')
    window.open(waHref(message), '_blank', 'noopener,noreferrer')
    const mail = document.createElement('a')
    mail.href = mailHref(`Booking ${ref} — ${selected.name}`, message)
    mail.click()
    setDone(ref)
  }

  const form = (
    <form className="form" onSubmit={submit}>
      <fieldset className="dispatch">
        <legend>What do you need?</legend>
        <div className="dispatch-picks">
          <button
            type="button"
            className={locationType === 'tow' ? 'btn btn-lime' : 'btn btn-ghost'}
            onClick={() => pickNeed('tow')}
          >
            Request a Tow
          </button>
          <button
            type="button"
            className={locationType === 'mobile' ? 'btn btn-lime' : 'btn btn-ghost'}
            onClick={() => pickNeed('mobile')}
          >
            Mobile call-out
          </button>
          <button
            type="button"
            className={locationType === 'shop' ? 'btn btn-lime' : 'btn btn-ghost'}
            onClick={() => pickNeed('shop')}
          >
            Book service
          </button>
        </div>
      </fieldset>

      <label>
        Service type
        <select value={serviceId} onChange={(e) => onServiceChange(e.target.value)} required>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </label>

      <div className="form-row">
        <label>
          Date
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Time
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            {times.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="choice">
        <legend>Shop or come to you</legend>
        <div className="choice-picks">
          <label className={locationType === 'shop' ? 'is-on' : undefined}>
            <input
              type="radio"
              name="loc"
              checked={locationType === 'shop'}
              onChange={() => setLocationType('shop')}
            />
            Shop — Barnes Drive
          </label>
          <label className={locationType === 'mobile' ? 'is-on' : undefined}>
            <input
              type="radio"
              name="loc"
              checked={locationType === 'mobile'}
              onChange={() => setLocationType('mobile')}
            />
            Mobile mechanic
          </label>
          <label className={locationType === 'tow' ? 'is-on' : undefined}>
            <input
              type="radio"
              name="loc"
              checked={locationType === 'tow'}
              onChange={() => setLocationType('tow')}
            />
            Tow / roadside
          </label>
        </div>
      </fieldset>

      {locationType !== 'shop' ? (
        <label>
          Location for mobile / tow
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Street, district, hotel, or GPS pin"
            required
          />
        </label>
      ) : null}

      <div className="form-row">
        <label>
          Year
          <input value={year} onChange={(e) => setYear(e.target.value)} placeholder="2018" required />
        </label>
        <label>
          Make
          <input value={make} onChange={(e) => setMake(e.target.value)} placeholder="Toyota" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Model
          <input value={model} onChange={(e) => setModel(e.target.value)} placeholder="Rav4" required />
        </label>
        <label>
          Plate
          <input value={plate} onChange={(e) => setPlate(e.target.value)} placeholder="CI plate" />
        </label>
      </div>

      <label>
        Your name
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <div className="form-row">
        <label>
          Phone
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>
      <label>
        Notes
        <textarea
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Symptoms, keys location, parking notes…"
        />
      </label>

      <button className="btn btn-lime btn-block" type="submit">
        Send request
      </button>
      <p className="fine">
        You will get a WhatsApp message and email draft with reference details. For emergencies, call{' '}
        {site.phoneDisplay} now.
      </p>
    </form>
  )

  if (done) {
    const inner = (
      <div className="confirm">
        <p className="kicker">Booking sent</p>
        <h2>You are on the board.</h2>
        <p className="lead">
          Reference <strong>{done}</strong>. Keep this number for payment and follow-up.
        </p>
        <div className="hero-actions">
          <a className="btn btn-lime" href={waHref(`Hi, following up on ${done}`)}>
            WhatsApp Us
          </a>
          {onClose ? (
            <button className="btn btn-ghost" type="button" onClick={onClose}>
              Close
            </button>
          ) : (
            <Link className="btn btn-ghost" to="/">
              Back home
            </Link>
          )}
        </div>
      </div>
    )
    if (embedded) return inner
    return (
      <div className="modal-scrim" role="dialog" aria-modal="true">
        <div className="modal-sheet">{inner}</div>
      </div>
    )
  }

  if (embedded) {
    return (
      <div className="panel">
        <p className="kicker">Book now</p>
        <h2>Request service</h2>
        <p className="muted">
          Request a tow or a mobile call-out — or book the shop. We confirm by WhatsApp and email.
        </p>
        {form}
      </div>
    )
  }

  return (
    <div className="modal-scrim" role="dialog" aria-modal="true" aria-labelledby="req-title">
      <div className="modal-sheet">
        <div className="modal-head">
          <div>
            <p className="kicker">Request</p>
            <h2 id="req-title">Tow or mobile call-out</h2>
          </div>
          <button className="icon-btn" type="button" onClick={onClose} aria-label="Close">
            <IconClose className="icon" />
          </button>
        </div>
        {form}
      </div>
    </div>
  )
}
