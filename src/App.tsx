import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { AboutPage } from './AboutPage'
import { BookingPage } from './BookingPage'
import { ContactPage } from './ContactPage'
import { Home } from './pages'
import { MobilePage } from './MobilePage'
import { PayPage } from './PayPage'
import { RequestProvider } from './request'
import { ServicesPage } from './ServicesPage'
import { NotFoundPage } from './NotFoundPage'
import { DvdlPage } from './DvdlPage'
import { EvPage } from './EvPage'
import { TiresPage } from './TiresPage'
import { TowingPage } from './TowingPage'

export default function App() {
  return (
    <BrowserRouter>
      <RequestProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/tires" element={<TiresPage />} />
            <Route path="/mobile" element={<MobilePage />} />
            <Route path="/towing" element={<TowingPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pay" element={<PayPage />} />
            <Route path="/dvdl" element={<DvdlPage />} />
            <Route path="/ev-battery" element={<EvPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </RequestProvider>
    </BrowserRouter>
  )
}
