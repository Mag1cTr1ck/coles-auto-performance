import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="page-hero wrap">
      <p className="kicker">404</p>
      <h1>That page is off the road.</h1>
      <p className="lead">The link may have moved. Head home, book service, or request a tow.</p>
      <div className="hero-actions">
        <Link className="btn btn-lime" to="/">
          Back home
        </Link>
        <Link className="btn btn-ghost" to="/book">
          Book service
        </Link>
      </div>
    </section>
  )
}
