import { useRef, useState } from 'react'
import "../css_files/Contact.css"

const CF7_FORM_ID = '1023'
const CF7_ENDPOINT = `https://kmf-plavi.hr/backend/wp-json/contact-form-7/v1/contact-forms/${CF7_FORM_ID}/feedback`

function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault()

    // honeypot: real users never fill this, bots often do
    // fake success instead of a silent no-op, so a real visitor whose
    // browser autofilled this hidden field isn't left thinking nothing happened.
    if (formRef.current.company.value) {
      setStatus('success')
      formRef.current.reset()
      return
    }

    setStatus('sending')

    const fd = new FormData(formRef.current)
    // CF7's REST endpoint expects these internal fields, normally injected
    // by its own on-page JS — required even though this form isn't on a WP page.
    fd.append('_wpcf7', CF7_FORM_ID)
    fd.append('_wpcf7_version', '6.1.7')
    fd.append('_wpcf_locale', 'en_US')
    fd.append('_wpcf7_unit_tag', `wpcf7-f&{CF7_FORM_ID}-o1`)
    fd.append('_wpcf7_container_post', '0')

    fetch(CF7_ENDPOINT, { method: 'POST', body: fd })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'mail_sent') {
          setStatus('success')
          formRef.current.reset()
        } else {
          console.error('CF7 error:', data)
          setStatus('error')
        }
      })
      .catch((err) => {
        console.error('CF7 request failed:', err)
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
            <div className="channel-value"><a className="link" href="mailto:admin@kmf-plavi.hr">admin@kmf-plavi.hr</a></div>
            <p>Best for corrections, car suggestions, or anything specific. For direct replies it's better to use form.</p>
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
          <p className="section-mono-contact">Send a message</p>
          <div className="form-wrap">
            <form className="row" ref={formRef} onSubmit={handleSubmit}>
              <div className="col-md-6 field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="col-md-6 field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="col-md-12 field full">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Car suggestion, correction, general question…"
                  required
                />
              </div>

              <div className="col-md-12 field full">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here."
                  required
                ></textarea>
              </div>

              {/* honeypot field, hidden from real users */}
              <div className='field-honeypot' aria-hidden='true'>
                <label htmlFor='company'>Company</label>
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
          <p className="section-mono-contact">What to expect</p>
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