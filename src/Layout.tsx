import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { useRequest } from './request'
import { site } from './site'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function Layout() {
  const { openRequest } = useRequest()

  return (
    <>
      <ScrollToTop />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <button className="fab" type="button" onClick={() => openRequest()}>
        Tow / Mobile
      </button>
      <a className="fab-call" href={`tel:${site.phone}`}>
        Emergency
      </a>
    </>
  )
}
