import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ServiceIcon } from './icons'
import { useRequest } from './request'
import { Seo } from './Seo'
import { categoryLabel, features, publicServices } from './site'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'diagnostics', label: 'Diagnostics', match: ['diagnostics', 'electrical', 'european', 'asian'] },
  { id: 'maintenance', label: 'Maintenance', match: ['oil', 'complete-care'] },
  { id: 'brakes', label: 'Brakes & A/C', match: ['brakes', 'ac'] },
  { id: 'tires', label: 'Tires', match: ['tires'] },
  { id: 'ev', label: 'EV & hybrid', match: ['ev-hybrid', 'ev-battery'] },
  { id: 'dvdl', label: 'DVDL', match: ['dvdl'] },
  { id: 'mobile', label: 'Mobile mechanic', match: ['mobile-service'] },
  { id: 'pickup', label: 'Pickup', match: ['pickup'] },
  { id: 'tow', label: 'Towing service', match: ['tow-in', 'towing', 'roadside'] },
] as const

function detailLink(id: string) {
  if (id === 'tires') return { to: '/tires', label: 'Tire details' }
  if (id === 'dvdl') return { to: '/dvdl', label: 'DVDL checklist' }
  if (id === 'ev-battery') return { to: '/ev-battery', label: 'EV battery pricing' }
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
    const active = pills.find((f) => f.id === filter)
    if (!active || active.id === 'all' || !('match' in active)) return catalog
    const ids = active.match as readonly string[]
    return catalog.filter((s) => ids.includes(s.id))
  }, [catalog, filter, pills])

  return (
    <>
      <Seo
        title="Services"
        description="Cole’s Auto is a service shop on Barnes Drive: diagnostics, maintenance, repairs, free DVDL, EV service, pickup to Spotts, and C-Haul towing."
      />
      <section className="page-hero wrap">
        <p className="kicker">Service shop</p>
        <h1>The work we do in the bay.</h1>
        <p className="lead">
          {features.tires
            ? 'Diagnostics, scheduled maintenance, brakes, A/C, tires, EV and hybrid work, and free DVDL — plus pickup, mobile call-outs, and C-Haul tow-in. Filter the list, then book.'
            : 'Diagnostics, scheduled maintenance, brakes, A/C, EV and hybrid work, and free DVDL — plus pickup, mobile call-outs, and C-Haul tow-in. Filter the list, then book.'}
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
                  <p className="tiny">{categoryLabel(s.category)}</p>
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
                          ? 'Request Tow / Mobile'
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
          free. Night and emergency tow rates may apply.
        </p>
        <Link className="btn btn-ghost" to="/book">
          Book service
        </Link>
      </section>
    </>
  )
}
