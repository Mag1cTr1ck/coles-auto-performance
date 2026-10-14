import { useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { IconClose } from './icons'
import { groupLabel, mailHref, publicServices, site, waHref } from './site'
import { modelsForMake, vehicleMakes } from './vehicles'

export type RequestPreset = {
  serviceId?: string
  category?: 'shop' | 'mobile' | 'tow'
}

const defaultByNeed = {
  shop: 'oil',
  mobile: 'roadside',
  tow: 'towing',
} as const

const bookingIds = {
  tow: ['towing'],
  mobile: ['roadside', 'jumpstart', 'lockout', 'flat-tire', 'fuel-delivery'],
} as const

function resolveInitial(preset?: RequestPreset) {
  const list = publicServices()
  const fromId = preset?.serviceId ? list.find((s) => s.id === preset.serviceId) : undefined
  if (fromId) {
    return { serviceId: fromId.id, locationType: fromId.category }
  }
  const cat = preset?.category ?? 'mobile'
  const preferred = list.find((s) => s.id === defaultByNeed[cat])
  const first = preferred ?? list.find((s) => s.category === cat) ?? list[0]
  return { serviceId: first.id, locationType: first.category }
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
  'ASAP',
]

function nextRef() {
  const n = Math.floor(1000 + Math.random() * 9000)
  return `CALL-${n}`
}

export function RequestModal({ preset, onClose, embedded }: Props) {
  const initial = resolveInitial(preset)
  const [serviceId, setServiceId] = useState<string>(initial.serviceId)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('ASAP')
  const [locationType, setLocationType] = useState<'shop' | 'mobile' | 'tow'>(initial.locationType)
  const [address, setAddress] = useState('')
  const [year, setYear] = useState('')
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [customModel, setCustomModel] = useState('')
  const [plate, setPlate] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [done, setDone] = useState<string | null>(null)

  const catalog = useMemo(() => publicServices(), [])
  const offered = useMemo(() => {
    if (locationType === 'shop') return catalog.filter((s) => s.category === 'shop')
    const ids: readonly string[] = bookingIds[locationType]
    const list = ids
      .map((id) => catalog.find((s) => s.id === id))
      .filter((s): s is NonNullable<typeof s> => Boolean(s))
    const extraId = preset?.serviceId
    if (extraId && !ids.includes(extraId)) {
      const extra = catalog.find((s) => s.id === extraId && s.category === locationType)
      if (extra) return [extra, ...list]
    }
    return list
  }, [catalog, locationType, preset?.serviceId])
  const selected = offered.find((s) => s.id === serviceId) ?? offered[0] ?? catalog[0]
  const groupOrder = [...new Set(offered.map((s) => s.group))]
  const modelOptions = modelsForMake(make)
  const needsCustomModel = make === 'Other' || model === 'Other'
  const vehicleModel = needsCustomModel ? customModel : model

  function pickNeed(kind: 'tow' | 'mobile' | 'shop') {
    if (kind === locationType) return
    setLocationType(kind)
    const next = catalog.find((s) => s.id === defaultByNeed[kind])
    if (next) setServiceId(next.id)
  }

  function onMakeChange(next: string) {
    setMake(next)
    setModel(next === 'Other' ? 'Other' : '')
    setCustomModel('')
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
      `Vehicle: ${year} ${make} ${vehicleModel} ${plate}`.trim(),
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : '',
      notes ? `Notes: ${notes}` : '',
    ].filter(Boolean)

    const booking = {
      ref,
      createdAt: new Date().toISOString(),
      serviceId: selected.id,
      date,
      time,
      locationType,
      address,
      year,
      make,
      model: vehicleModel,
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
        <select value={selected.id} onChange={(e) => setServiceId(e.target.value)} required>
          {groupOrder.length > 1
            ? groupOrder.map((g) => (
                <optgroup key={g} label={groupLabel(g)}>
                  {offered
                    .filter((s) => s.group === g)
                    .map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                </optgroup>
              ))
            : offered.map((s) => (
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
          <select value={make} onChange={(e) => onMakeChange(e.target.value)} required>
            <option value="">Select make</option>
            {vehicleMakes.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>
          Model
          {needsCustomModel ? (
            <input
              value={customModel}
              onChange={(e) => setCustomModel(e.target.value)}
              placeholder="Model"
              required
            />
          ) : (
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
              disabled={!make}
            >
              <option value="">{make ? 'Select model' : 'Select make first'}</option>
              {modelOptions.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          )}
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
        You will get a WhatsApp message and email draft with reference details. Or call{' '}
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
          Pick shop, mobile, or tow, then the job. We confirm by WhatsApp and email.
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
            <h2 id="req-title">Request service</h2>
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
