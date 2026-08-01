import React from 'react'
import "../css_files/About.css"

function About() {
  return (
    <main className="about">
      <div className="container-fluid page">
        <div
          className="masthead d-flex align-items-baseline justify-content-between"
        >
          <div className="blogname">Daily Fast Files</div>
          <div className="filenum">About</div>
        </div>

        <section className="hero">
          <p className="eyebrow">The person · The pivot · The project</p>
          <h1>Not a<br />straight<span> road.</span></h1>
          <p className="hero-sub">
            Food technologist. Food inspector. Taxi driver. Dispatch operator.
            Programmer. The career path makes more sense from the inside than it
            looks on paper.
          </p>
        </section>

        <div className="divider"></div>

        <section>
          <p className="section-mono">The person</p>
          <div className="row align-items-center justify-content-between person">
            <div className="col-0 col-lg-2 d-flex justify-content-center">
              <div className="monogram-large">KMF</div>
            </div>
            <div className="col-12 col-lg-10">
              <div className="person-body">
                <h2>Krešimir-Mirko Fiket</h2>
                <p className="person-role">
                  Zagreb, Croatia · Front-end developer in progress
                </p>
                <p>
                  I hold a Master's degree in Food Technology from the
                  University of Zagreb and spent most of my professional life in
                  food industry and government roles — brewery engineering, food
                  safety inspection, logistics. After time in Ireland and a
                  return to Zagreb, I run a taxi business and work as a dispatch
                  operator for Radio Taxi Zagreb. Alongside all of that, I am
                  transitioning into front-end development.
                </p>
                <p>
                  The technical thinking that runs through all of those jobs —
                  understanding systems, finding where processes break,
                  reasoning about cause and effect — started earlier than any of
                  them. It started at school.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="school-block">
          <p className="section-mono">Where it started</p>
          <h3>XV. Gymnasium — MIOC, Zagreb</h3>
          <p>
            XV. Gymnasium — universally known in Croatia by its acronym MIOC
            (Matematičko-informatički obrazovni centar, Mathematical-Informatics
            Education Centre) — is consistently ranked the best high school in
            Croatia. On the national state matura results, it places first with
            an average score of 4.21 in the higher-level mathematics examination
            — the only school in the country to break 4.00, and the widest
            margin from the field of any subject ranking.
          </p>
          <p>
            Entry is competitive: not just top primary-school grades, but a
            dedicated mathematics entrance exam. The school was the first in
            Croatia to teach information science as a subject, in 1965, and its
            graduates go almost entirely to the country's most demanding
            university programs — above all FER, the Faculty of Electrical
            Engineering and Computing in Zagreb.
          </p>

          <div className="row school-stats">
            <div className="col-sm-4 school-stat">
              <div className="school-stat-num">#1</div>
              <div className="school-stat-label">
                National matura ranking, Croatia
              </div>
            </div>
            <div className="col-sm-4 school-stat">
              <div className="school-stat-num">1965</div>
              <div className="school-stat-label">
                First school in Croatia to teach informatics
              </div>
            </div>
            <div className="col-sm-4 school-stat">
              <div className="school-stat-num">4.34</div>
              <div className="school-stat-label">
                Average A-level maths matura score (national best)
              </div>
            </div>
          </div>

          <p>
            The school's curriculum is built around mathematics, physics, and
            logic — precisely the disciplines that underpin computer science.
            What MIOC drills into its students is not just calculation but
            structured reasoning: how to decompose a hard problem, how to think
            about the general case, how to construct a proof. These are the same
            habits that make someone a better programmer, and they are
            noticeably harder to learn later in life than they are at sixteen.
          </p>
          <p>
            Its students dominate Croatia's national teams at the International
            Olympiad in Informatics — in 2024, all four Croatian team members
            were MIOC students. The school's graduates are, in practice, the
            pipeline that feeds the country's most competitive computing
            faculty. I attended this school between 1990 and 1994. The physics
            exam I couldn't pass at the Faculty of Electronics prevented me from
            continuing in that direction at the time — but the thinking it built
            stayed.
          </p>
        </section>

        <section className="row skills">
          <div className="col-6 col-sm-3 skill">
            <div className="skill-label">Languages</div>
            <div className="skill-value">HTML · CSS · JS</div>
          </div>
          <div className="col-6 col-sm-3 skill">
            <div className="skill-label">Framework</div>
            <div className="skill-value">React.js</div>
          </div>
          <div className="col-6 col-sm-3 skill">
            <div className="skill-label">CMS</div>
            <div className="skill-value">WordPress (headless)</div>
          </div>
          <div className="col-6 col-sm-3 skill">
            <div className="skill-label">Tooling</div>
            <div className="skill-value">Node.js · cheerio</div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="pivot">
          <p className="section-mono">The long way round</p>
          <p>
            After MIOC, my academic strengths in mathematics and chemistry led
            me to the Faculty of Food Technology — where both subjects formed
            the entrance exam. It turned out to be a good fit: a structured,
            analytical degree that led to a career in quality systems, process
            engineering, and food safety auditing. Seven years at a brewery, a
            year at Tetra Pak, seven years as a government food inspector.
          </p>
          <p>
            In 2017 I went to Ireland to change direction. I came back in 2019
            and started a taxi business, joining Radio Taxi Zagreb. A few years
            later I moved from driving to the dispatch center — coordinating
            drivers, managing orders, handling customer support. It is more of a
            systems job than it looks from the outside.
          </p>
          <p>
            Somewhere in all of this, the interest in computing that had been
            sitting since high school became something I could actually act on.
            I completed a programming course on Udemy, built a personal site,
            and then built this project — a full headless CMS pipeline with real
            data, real design decisions, and React on the front end. The
            mathematics MIOC gave me is still there, doing the same work it
            always did.
          </p>
        </section>

        <div className="divider"></div>

        <section className="project-story">
          <p className="section-mono">This project</p>
          <p>
            Daily Fast Files needed to be something worth building — not a
            tutorial clone, not a generic blog. Production-line performance cars
            fit because the subject has real structure: every car has the same
            set of data points, every profile needs the same sections, and there
            are enough of them (36) to make the data layer actually work.
          </p>
          <p>
            The full pipeline runs from standalone HTML files through a Node.js
            import script into WordPress ACF fields, served via the REST API to
            a React front end. Every spec is individually queryable. Every image
            is hosted on WordPress. Every profile follows the same template. It
            is a learning project that ended up being a working database.
          </p>
        </section>

        <div className="divider"></div>

        <section className="how-built-about">
          <p className="section-mono">How this was built</p>
          <h2>Generated,<br />not assembled.</h2>
          <p className="how-built-about-intro">
            Every page on this site was written, designed, and deployed as part
            of a front-end development project — building a headless CMS
            pipeline from scratch using WordPress as a database and React as the
            front end. Here's how it works.
          </p>

          <div className="row stack-grid">
            <div className="col-sm-6 col-lg-3 stack-item">
              <div className="stack-label">Content database</div>
              <div className="stack-value">WordPress + ACF</div>
              <div className="stack-desc">
                36 car posts stored in WordPress, each with structured ACF
                custom fields — specs, title, image URL, Sleeper Index value,
                and the full HTML content block.
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 stack-item">
              <div className="stack-label">Data layer</div>
              <div className="stack-value">WordPress REST API</div>
              <div className="stack-desc">
                React fetches from
                <span className="inline-code">wp-json/wp/v2/posts</span> — each post
                returns clean JSON with structured fields alongside the full
                rendered HTML.
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 stack-item">
              <div className="stack-label">Front end</div>
              <div className="stack-value">React.js</div>
              <div className="stack-desc">
                A single-page React app renders each car from the API response.
                The catalog lists all 36 cars; clicking one opens the full car
                page.
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 stack-item">
              <div className="stack-label">Content generation</div>
              <div className="stack-value">Claude (Anthropic)</div>
              <div className="stack-desc">
                All 36 car profiles — specs, copy, heritage, driving impressions
                — were researched and written with Claude, then imported via a
                custom Node.js script.
              </div>
            </div>
          </div>

          <div className="how-built-about-body">
            <p>
              Each car profile started as a standalone HTML file —
              hand-templated, with custom CSS and a small JavaScript animation
              for the Sleeper Index gauge. A Node.js import script parsed every
              file with <span className="inline-code">cheerio</span>, extracted the
              structured data, and pushed it to WordPress via the REST API —
              specs into ACF fields, full HTML into post content.
            </p>
            <p>
              Car photos were sourced from Unsplash and Pexels, uploaded to the
              WordPress media library programmatically, and the image URLs
              updated across all posts and ACF fields in a second pass. The
              Sleeper Index — a per-car gauge rating how stealthy the car looks
              — was extracted directly from each file's inline JavaScript and
              stored as a numeric ACF field, available for filtering and display
              in React.
            </p>
            <p>
              The front end was built as a learning project, exploring how
              WordPress can function as a headless CMS: structured content in,
              clean JSON out, React handling everything the visitor sees.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About