import React from "react";
import { Link } from "react-router";
import "../css_files/Register.css";

function Register() {
  return (
    <main className="register">
      <div className="container-fluid page">
        <div className="masthead">
          <div className="blogname">Fast Cars</div>
          <div className="filenum">Register</div>
        </div>

        <section className="hero">
          <p className="eyebrow">Free · Two emails a year · Unsubscribe anytime</p>
          <h1>
            Get told when
            <br />
            the <span>list grows.</span>
          </h1>
          <p className="hero-sub">
            Register with a username and an email address, and you'll hear about it the day a new car profile goes live. No password to set, no spam, no
            marketing lists — just one email, only when the database grows.
          </p>
        </section>

        <div className="row three-col">
          <div className="col-lg-4 pillar">
            <div className="pillar-num">2</div>
            <div className="pillar-label">Emails a year</div>
            <p>New cars get added in batches, roughly once or twice a year. That's the only thing that triggers an email.</p>
          </div>
          <div className="col-lg-4 pillar">
            <div className="pillar-num">0</div>
            <div className="pillar-label">Spam or third parties</div>
            <p>Your email is used for one purpose: telling you the database grew. It's never sold, shared, or added to a list.</p>
          </div>
          <div className="col-lg-4 pillar">
            <div className="pillar-num">1-click</div>
            <div className="pillar-label">Unsubscribe</div>
            <p>Every update email carries a link out. Leave whenever you want — no login required to do it.</p>
          </div>
        </div>

        <div className="divider"></div>

        <section className="form-section">
          <p className="section-mono">Create your account</p>
          <div className="form-wrap">
            <form>
              <div className="row form-row">
                <div className="col-12 col-lg-6 field">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" name="username" placeholder="How you'll be known" required />
                </div>
                <div className="col-12 col-lg-6 field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div className="consent-row">
                <input type="checkbox" id="consent" name="consent" required />
                <label htmlFor="consent">
                  I agree to receive update emails when new cars are added, and I've read the <Link to='/privacypolicy'>Privacy Policy</Link>.
                </label>
              </div>

              <div className="form-actions">
                <p className="form-note">No password required. Your username and email are stored only to send these notifications.</p>
                <button type="submit" className="submit-btn">
                  Sign me up
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="expect">
          <p className="section-mono">What happens next</p>
          <div className="row rule-row">
            <div className="col-12 col-md-6 rule-cell">Confirmation</div>
            <div className="col-12 col-md-6 rule-cell">A short email lands in your inbox confirming you're on the list. Nothing else to set up.</div>
          </div>
          <div className="row rule-row">
            <div className="col-12 col-md-6 rule-cell">Updates</div>
            <div className="col-12 col-md-6 rule-cell">
              When a new car profile goes live, you get one email with a link to it. No digests, no roundups, no filler.
            </div>
          </div>
          <div className="row rule-row">
            <div className="col-12 col-md-6 rule-cell">Your data</div>
            <div className="col-12 col-md-6 rule-cell">
              Just a username and an email, kept until you unsubscribe or ask for deletion. Full detail on the{" "}
              <Link to='/privacypolicy'>Privacy Policy</Link>.
            </div>
          </div>
        </section>

        <p className="foot-link">
          Already registered, or changed your mind? See the <Link to='/privacypolicy'>Privacy Policy</Link> for how to unsubscribe or delete your
          account.
        </p>
      </div>
    </main>
  );
}

export default Register;
