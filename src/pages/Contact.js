import React from 'react'
import "../css_files/Contact.css"

function Contact() {
  return (
        <main class="contact">
      <div class="container-fluid page">
        <div
          class="masthead d-flex align-items-baseline justify-content-between"
        >
          <div class="blogname">Daily Fast Files</div>
          <div class="filenum">Contact</div>
        </div>

        <section class="hero">
          <p class="eyebrow">Questions · Corrections · Requests</p>
          <h1>Just<br />say<span> something.</span></h1>
          <p class="hero-sub">
            Spotted a wrong number on a profile, want a car added to the list,
            or just want to talk headless WordPress and React? This is the
            place.
          </p>
        </section>

        <div class="row justify-content-center channels">
          <div class="col-md-4 channel">
            <div class="channel-label">Email</div>
            <div class="channel-value">hello@dailyfastfiles.com</div>
            <p>Best for corrections, car suggestions, or anything specific.</p>
          </div>
          <div class="col-md-4 channel">
            <div class="channel-label">Based in</div>
            <div class="channel-value">Zagreb, Croatia</div>
            <p>Central European Time, UTC+1 / UTC+2 in summer.</p>
          </div>
          <div class="col-md-4 channel">
            <div class="channel-label">Response time</div>
            <div class="channel-value">1–3 days</div>
            <p>This is a side project, run outside a day job.</p>
          </div>
        </div>

        <div class="divider"></div>

        <section class="form-section">
          <p class="section-mono">Send a message</p>
          <div class="form-wrap">
            <form class="row">
              <div class="col-md-6 field">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                />
              </div>
              <div class="col-md-6 field">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </div>

              <div class="col-md-12 field full">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Car suggestion, correction, general question…"
                />
              </div>

              <div class="col-md-12 field full">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here."
                ></textarea>
              </div>
            </form>

            <div class="row form-actions">
              <div class="col-sm-6">
                <p class="form-note">
                  No mailing lists, no spam. This form is for direct replies
                  only.
                </p>
              </div>
              <div class="col-sm-6 d-flex justify-content-sm-end">
                <button type="submit" class="submit-btn">Send message</button>
              </div>
            </div>
          </div>
        </section>

        <section class="expect">
          <p class="section-mono">What to expect</p>
          <div class="row rule-row-contact">
            <div class="col-3 col-sm-4 col-md-5 col-xxl-6 rule-cell">Car suggestions</div>
            <div class="col-9 col-sm-8 col-md-7 col-xxl-6 rule-cell">
              If it fits the rules on the About page — standard production, no
              homologation, daily usable — it goes on the shortlist.
            </div>
          </div>
          <div class="row rule-row-contact">
            <div class="col-3 col-sm-4 col-md-5 col-xxl-6 rule-cell">Corrections</div>
            <div class="col-9 col-sm-8 col-md-7 col-xxl-6 rule-cell">
              Specs change and mistakes happen. Point to the car and the field,
              and it gets checked against the source.
            </div>
          </div>
          <div class="row rule-row-contact">
            <div class="col-3 col-sm-4 col-md-5 col-xxl-6 rule-cell">Technical questions</div>
            <div class="col-9 col-sm-8 col-md-7 col-xxl-6 rule-cell">
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