import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import "../css_files/Contact.css"

function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault()

    // honeypot: real users never fill this, bots often do
    if (formRef.current.company.value) {
      return
    }

    setStatus('sending')

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
    )
      .then(() => {
        setStatus('success')
        formRef.current.reset()
      })
      .catch((err) => {
        console.error('EmailJS error:', err)
        setStatus('error')
      })

  }
  return (
    <main className="contact">
      <div className="container-fluid page">
        <div
          className="masthead d-flex align-items-baseline justify-content-between"
        >
          <div className="blogname">Daily Fast Files</div>
          <div className="filenum">Contact</div>
        </div>

        <section className="hero">
          <p className="eyebrow">Questions · Corrections · Requests</p>
          <h1>Just<br />say<span> something.</span></h1>
          <p className="hero-sub">
            Spotted a wrong number on a profile, want a car added to the list,
            or just want to talk headless WordPress and React? This is the
            place.
          </p>
        </section>

        <div className="row justify-content-center channels">
          <div className="col-md-4 channel">
            <div className="channel-label">Email</div>
            <div className="channel-value">hello@dailyfastfiles.com</div>
            <p>Best for corrections, car suggestions, or anything specific.</p>
          </div>
          <div className="col-md-4 channel">
            <div className="channel-label">Based in</div>
            <div className="channel-value">Zagreb, Croatia</div>
            <p>Central European Time, UTC+1 / UTC+2 in summer.</p>
          </div>
          <div className="col-md-4 channel">
            <div className="channel-label">Response time</div>
            <div className="channel-value">1–3 days</div>
            <p>This is a side project, run outside a day job.</p>
          </div>
        </div>

        <div className="divider"></div>

        <section className="form-section">
          <p className="section-mono">Send a message</p>
          <div className="form-wrap">
            <form className="row" ref={formRef} onSubmit={handleSubmit}>
              <div className="col-md-6 field">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="col-md-6 field">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="col-md-12 field full">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Car suggestion, correction, general question…"
                  required
                />
              </div>

              <div className="col-md-12 field full">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here."
                  required
                ></textarea>
              </div>

              {/* honeypot field, hidden from real users */}
              <div className='field-honeypot' aria-hidden='true'>
                <label for='company'>Company</label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  tabIndex='-1'
                  autoComplete='off'
                />
              </div>

              <div className="row form-actions">
                <div className="col-sm-6">
                  <p className="form-note">
                    {status === 'success' && 'Message sent - thanks, I\'ll get back to you soon.'}
                    {status === 'error' && 'Something went wrong sending on that. Try again or email directly.'}
                    {(status === 'idle' || status === 'sending') && 'No mailing lists, no spam. This form is for direct replies only.'}
                  </p>
                </div>
                <div className="col-sm-6 d-flex justify-content-sm-end">
                  <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending' : 'Send message'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        <section className="expect">
          <p className="section-mono">What to expect</p>
          <div className="row rule-row-contact">
            <div className="col-3 col-sm-4 col-md-5 col-xxl-6 rule-cell">Car suggestions</div>
            <div className="col-9 col-sm-8 col-md-7 col-xxl-6 rule-cell">
              If it fits the rules on the About page — standard production, no
              homologation, daily usable — it goes on the shortlist.
            </div>
          </div>
          <div className="row rule-row-contact">
            <div className="col-3 col-sm-4 col-md-5 col-xxl-6 rule-cell">Corrections</div>
            <div className="col-9 col-sm-8 col-md-7 col-xxl-6 rule-cell">
              Specs change and mistakes happen. Point to the car and the field,
              and it gets checked against the source.
            </div>
          </div>
          <div className="row rule-row-contact">
            <div className="col-3 col-sm-4 col-md-5 col-xxl-6 rule-cell">Technical questions</div>
            <div className="col-9 col-sm-8 col-md-7 col-xxl-6 rule-cell">
              Happy to talk through the WordPress/React setup, the ACF field
              structure, or the import pipeline.
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Contact