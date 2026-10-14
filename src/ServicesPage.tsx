import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ServiceIcon } from './icons'
import { useRequest } from './request'
import { Seo } from './Seo'
import { features, groupLabel, publicServices, serviceCatalogJsonLd } from './site'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'maintenance', label: 'Maintenance' },
  { id: 'brakes', label: 'Brakes' },
  { id: 'engine', label: 'Engine' },
  { id: 'drivetrain', label: 'Drivetrain' },
  { id: 'tires', label: 'Tires' },
  { id: 'electrical', label: 'Electrical' },
  { id: 'ac', label: 'A/C' },
  { id: 'undercar', label: 'Undercar' },
  { id: 'specialty', label: 'Specialty' },
  { id: 'inspection', label: 'Inspection' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'tow', label: 'Towing' },
] as const

function detailLink(id: string) {
  if (id === 'tires') return { to: '/tires', label: 'Tire details' }
  if (id === 'dvdl') return { to: '/dvdl', label: 'DVDL checklist' }
  if (id === 'ev-battery') return { to: '/ev-battery', label: 'EV battery details' }
  if (id === 'mobile-service') return { to: '/mobile', label: 'Mobile mechanic' }
  return null
}

export function ServicesPage() {
  const { openRequest } = useRequest()
  const [filter, setFilter] = useState<(typeof filters)[number]['id']>('all')

  const catalog = useMemo(() => publicServices(), [])
  const pills = useMemo(
    () => (features.tires ? filters : filters.filter((f) => f.id !== 'tires')),
    [],
  )

  const visible = useMemo(() => {
    if (filter === 'all') return catalog
    return catalog.filter((s) => s.group === filter)
  }, [catalog, filter])

  return (
    <>
      <Seo
        title="Auto Repair, Mobile Mechanic & Towing in Grand Cayman"
        description="Cole’s Auto on Barnes Drive, George Town: oil change, brakes, engine diagnostics, A/C, EV, DVDL inspection, mobile mechanic, and 24/7 C-Haul towing in Grand Cayman. Call 345-936-2653."
        jsonLd={serviceCatalogJsonLd()}
      />
      <section className="page-hero wrap">
        <p className="kicker">Grand Cayman mechanic</p>
        <h1>Auto repair, mobile, and towing.</h1>
        <p className="lead">
          {features.tires
            ? 'Oil change, brakes, engine, drivetrain, tires, electrical, A/C, suspension, EV, DVDL inspection, mobile mechanic visits, and C-Haul towing — George Town shop on Barnes Drive. Filter the list, then book.'
            : 'Oil change, brakes, engine, drivetrain, electrical, A/C, suspension, EV, DVDL inspection, mobile mechanic visits, and C-Haul towing — George Town shop on Barnes Drive. Filter the list, then book.'}
        </p>
        <div className="filter-pills" role="tablist" aria-label="Service categories">
          {pills.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              className={filter === f.id ? 'btn btn-lime btn-sm' : 'btn btn-ghost btn-sm'}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>
      <section className="wrap section">
        <div className="card-grid two">
          {visible.map((s) => {
            const extra = detailLink(s.id)
            return (
              <article key={s.id} className="dark-card service-row">
                <span className="icon-chip">
                  <ServiceIcon name={s.icon} className="icon" />
                </span>
                <div className="service-body">
                  <p className="tiny">{groupLabel(s.group)}</p>
                  <h3>{s.name}</h3>
                  <p className="service-copy">{s.description}</p>
                  <p className="meta">
                    <span>{s.time}</span>
                    <span>{s.price}</span>
                  </p>
                  <div className="service-actions">
                    <button
                      className="btn btn-lime btn-sm"
                      type="button"
                      onClick={() => openRequest({ serviceId: s.id, category: s.category })}
                    >
                      {s.category === 'tow'
                        ? 'Request a Tow'
                        : s.category === 'mobile'
                          ? 'Request visit'
                          : 'Book service'}
                    </button>
                    {extra ? (
                      <Link className="btn btn-ghost btn-sm" to={extra.to}>
                        {extra.label}
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        <p className="fine">
          Prices in CI$. Diagnostics and EV work are quoted after inspection. DVDL inspection is
          free. After-hours tow rates may apply. We are a service shop — not a body or paint shop.
        </p>
        <Link className="btn btn-ghost" to="/book">
          Book service
        </Link>
      </section>
    </>
  )
}
