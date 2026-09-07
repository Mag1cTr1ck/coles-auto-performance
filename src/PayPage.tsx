import { useState, type FormEvent } from 'react'
import { IconCard } from './icons'
import { Seo } from './Seo'
import { site, telHref, waHref } from './site'

export function PayPage() {
  const [invoice, setInvoice] = useState('')
  const [amount, setAmount] = useState('')
  const [sent, setSent] = useState(false)

  function submit(e: FormEvent) {
    e.preventDefault()
    const msg = `Payment request for ${invoice || 'job'} — CI$ ${amount || '0.00'}`
    window.open(waHref(msg), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <>
      <Seo
        title="Pay"
        description="Pay a Cole’s Auto or C-Haul invoice by secure payment link. Cayman-friendly checkout for shop, mobile, or towing — this website never stores card details."
      />
      <section className="page-hero wrap">
        <p className="kicker">Simple online payments</p>
        <h1>Pay for shop, mobile, or towing online.</h1>
        <p className="lead">
          Hosted checkout from a Cayman bank or payment provider. This website does not store card
          details itself.
        </p>
        <div className="mini-grid">
          <span>Credit / Debit Card</span>
          <span>Secure Payment Link</span>
          <span>Invoice Payment</span>
          <span>Mobile Friendly</span>
        </div>
      </section>

      <section className="wrap section">
        <div className="hero-actions">
          <button className="btn btn-lime" type="button" onClick={() => document.getElementById('inv')?.focus()}>
            <IconCard className="icon" />
            Pay online
          </button>
          <a className="btn btn-ghost" href={waHref('Hi, can you send my balance / payment link?')}>
            Ask about your balance
          </a>
        </div>

        <form className="lime-card pay-card" onSubmit={submit}>
          <p className="kicker dark">Cole’s Auto · checkout</p>
          <h2>Secure payment</h2>
          <p>Enter your invoice or job reference. We send a payment link on WhatsApp.</p>
          <label>
            Invoice / job number
            <input
              id="inv"
              value={invoice}
              onChange={(e) => setInvoice(e.target.value)}
              placeholder="Example: CALL-1024"
              required
            />
          </label>
          <label>
            Amount
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="CI$ 0.00"
              required
            />
          </label>
          <button className="btn btn-dark" type="submit">
            Request payment link
          </button>
          {sent ? (
            <p>
              WhatsApp opened for {invoice}. Prefer to call? <a href={telHref()}>{site.phoneDisplay}</a>
            </p>
          ) : null}
        </form>
      </section>
    </>
  )
}
