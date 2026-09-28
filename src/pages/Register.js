import React from "react";
import "../css_files/Register.css"

function Register() {
  return (
    <main class="register">
      <div class="container-fluid page">
        <div class="masthead">
          <div class="blogname">Fast Cars</div>
          <div class="filenum">Register</div>
        </div>

        <section class="hero">
          <p class="eyebrow">Free · Two emails a year · Unsubscribe anytime</p>
          <h1>
            Get told when
            <br />
            the <span>list grows.</span>
          </h1>
          <p class="hero-sub">
            Register with a username and an email address, and you'll hear about it the day a new car profile goes live. No password to set, no spam, no
            marketing lists — just one email, only when the database grows.
          </p>
        </section>

        <div class="row three-col">
          <div class="col-lg-4 pillar">
            <div class="pillar-num">2</div>
            <div class="pillar-label">Emails a year</div>
            <p>New cars get added in batches, roughly once or twice a year. That's the only thing that triggers an email.</p>
          </div>
          <div class="col-lg-4 pillar">
            <div class="pillar-num">0</div>
            <div class="pillar-label">Spam or third parties</div>
            <p>Your email is used for one purpose: telling you the database grew. It's never sold, shared, or added to a list.</p>
          </div>
          <div class="col-lg-4 pillar">
            <div class="pillar-num">1-click</div>
            <div class="pillar-label">Unsubscribe</div>
            <p>Every update email carries a link out. Leave whenever you want — no login required to do it.</p>
          </div>
        </div>

        <div class="divider"></div>

        <section class="form-section">
          <p class="section-mono">Create your account</p>
          <div class="form-wrap">
            <form>
              <div class="row form-row">
                <div class="col-12 col-lg-6 field">
                  <label for="username">Username</label>
                  <input type="text" id="username" name="username" placeholder="How you'll be known" required />
                </div>
                <div class="col-12 col-lg-6 field">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div class="consent-row">
                <input type="checkbox" id="consent" name="consent" required />
                <label for="consent">
                  I agree to receive update emails when new cars are added, and I've read the
                  <a href="daily-fast-files-privacy.html">Privacy Policy</a>.
                </label>
              </div>

              <div class="form-actions">
                <p class="form-note">No password required. Your username and email are stored only to send these notifications.</p>
                <button type="submit" class="submit-btn">
                  Sign me up
                </button>
              </div>
            </form>
          </div>
        </section>

        <section class="expect">
          <p class="section-mono">What happens next</p>
          <div class="row rule-row">
            <div class="col-12 col-md-6 rule-cell">Confirmation</div>
            <div class="col-12 col-md-6 rule-cell">A short email lands in your inbox confirming you're on the list. Nothing else to set up.</div>
          </div>
          <div class="row rule-row">
            <div class="col-12 col-md-6 rule-cell">Updates</div>
            <div class="col-12 col-md-6 rule-cell">
              When a new car profile goes live, you get one email with a link to it. No digests, no roundups, no filler.
            </div>
          </div>
          <div class="row rule-row">
            <div class="col-12 col-md-6 rule-cell">Your data</div>
            <div class="col-12 col-md-6 rule-cell">
              Just a username and an email, kept until you unsubscribe or ask for deletion. Full detail on the
              <a href="daily-fast-files-privacy.html">Privacy Policy</a>.
            </div>
          </div>
        </section>

        <p class="foot-link">
          Already registered, or changed your mind? See the <a href="daily-fast-files-privacy.html">Privacy Policy</a> for how to unsubscribe or delete your
          account.
        </p>
      </div>
    </main>
  );
}

export default Register;
