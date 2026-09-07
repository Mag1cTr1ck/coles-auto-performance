import { useSearchParams } from 'react-router-dom'
import { RequestModal } from './RequestModal'
import { Seo } from './Seo'
import { telHref } from './site'

export function BookingPage() {
  const [params] = useSearchParams()
  const serviceId = params.get('service') ?? undefined
  const category = params.get('type') as 'shop' | 'mobile' | 'tow' | null

  return (
    <>
      <Seo
        title="Book"
        description="Online booking for Cole’s Auto shop service, mobile mechanic visits, and C-Haul towing. Pick a time, add vehicle details, and get WhatsApp confirmation."
      />
      <section className="page-hero wrap">
        <p className="kicker">Booking</p>
        <h1>Choose service. Pick a time. We confirm.</h1>
        <p className="lead">
          First time in? Stay reachable while the car is in our care — we will not work it if we
          cannot reach you. Add year, make, model, and a location for pickup or tow. Confirmation
          goes out by WhatsApp and email.
        </p>
        <a className="btn btn-ghost" href={telHref()}>
          Call Now
        </a>
      </section>
      <section className="wrap section">
        <RequestModal
          embedded
          preset={{
            serviceId,
            category: category ?? undefined,
          }}
        />
      </section>
    </>
  )
}
