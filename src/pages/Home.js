import React from 'react'
import "../css_files/Home.css"

function Home() {
  return (
    <main class="home">
      <div class="container-fluid px-0 px-md-3">
        <div
          class="masthead d-flex align-items-baseline justify-content-between"
        >
          <div class="blogname">Daily Fast Files</div>
          <div class="filenum">Home</div>
        </div>

        <div class="hero">
          <p class="eyebrow">36 cars · production line · daily usable</p>
          <h1>Fast cars<br />nobody<span> notices.</span></h1>
          <p class="hero-sub">
            A reference for the cars that came off a regular assembly line, live
            in company car parks, and still run 0–100 in under five seconds.
          </p>
        </div>

        <div class="row three-col">
          <div class="col-md-4 pillar">
            <div class="pillar-num">36</div>
            <div class="pillar-label">Cars profiled</div>
            <p>
              Every car on this list is in current production. No classics, no
              concepts, no one-off specials.
            </p>
          </div>
          <div class="col-md-4 pillar">
            <div class="pillar-num">0</div>
            <div class="pillar-label">Race cars</div>
            <p>
              None of these were built for a circuit. They were built for
              commutes, school runs, and motorways.
            </p>
          </div>
          <div class="col-md-4 pillar">
            <div class="pillar-num">1</div>
            <div class="pillar-label">Rule</div>
            <p>
              It must roll off the same line as the base model. No homologation
              runs, no special orders.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-4 col-md-5 section-mono">
            <p>The premise</p>
            <h2>Built fast.<br />Looks slow...<br />But only from distance.</h2>
          </div>

          <div class="col-8 col-md-7 premise-body">
            <p>
              Most cars badged "performance" either wear it obviously — wide
              arches, air scoops, a wing — or carry a price tag that removes
              them from any conversation about practicality.
            </p>
            <p>
              This list is for the other kind. The ones that park next to the
              fleet Octavia in the office car park. The ones with 265 PS, a full
              boot, and a standard production number that runs into the
              thousands. Cars you could buy from a main dealer today, drive to
              the supermarket tomorrow, and use to embarrass something twice the
              price on the weekend.
            </p>
            <p>
              Daily Fast Files profiles them one by one: the engine, the
              numbers, the history of the badge, and an honest answer to the
              question of who actually needs one.
            </p>
          </div>
        </div>

        <div class="divider"></div>

        <section class="how-built">
          <p>How this was built</p>
          <p>
            Every page on this site was built as part of a front-end development
            project — exploring how WordPress can work as a content database and
            React as the front end that consumes it. The 36 car profiles were
            written and researched with AI assistance, imported into WordPress
            programmatically, and served to a React app via the WordPress REST
            API.
          </p>
          <p>
            It's a working example of a headless CMS setup: structured data in,
            clean pages out. The full story is on the About page.
          </p>
          <p>
            <strong
            >The profiles on this site are for reference only. Every car here
              has been researched to the best of our ability, but
              specifications, availability, and production status change. Before
              purchasing any vehicle, verify current specs and pricing directly
              with the manufacturer or an authorised dealer — and drive it
              yourself.</strong
            >
          </p>

          <div class="claude-note">
            <div class="claude-label">About Claude</div>
            <p>
              Claude is an AI assistant made by Anthropic. Every car profile on
              this site — the copy, the specs, the heritage sections, the
              driving impressions, the Sleeper Index annotations — was
              researched and written in conversation with Claude.
            </p>
            <p>
              That's not a shortcut. Each profile required knowing the car's
              production history, its engine family, where it sits relative to
              its siblings, and who realistically buys one. Claude handled the
              research and the first draft. The decisions about what to include
              and what to cut were made by a human.
            </p>
            <p>
              The result is 36 profiles that are consistent in structure, honest
              in tone, and specific enough to be useful — which is what this
              site is for.
            </p>
          </div>
        </section>

        <div class="row align-items-center justify-content-between about-strip">
          <div class="col-3 col-sm-2 monodiv">
            <div class="monogram">KMF</div>
          </div>
          <div class="col-9 col-sm-10 about-text">
            <p>
              <strong>Krešimir-Mirko Fiket : </strong> front - end developer and
              the person behind Daily Fast Files. This started as a side project
              to build something worth looking at while learning headless
              WordPress and React. It turned into a database of 36
              production-line performance cars. More on the About page.
            </p>
          </div>
        </div>

        <div class="rules section-mono">
          <p>What qualifies</p>
          <div class="row rule-row">
            <div class="col-4 col-md-6 rule-cell">Standard production line</div>
            <div class="col-8 col-md-6 rule-cell">
              Built on the same line as the base model, by the same workers, in
              the same factory.
            </div>
          </div>
          <div class="row rule-row">
            <div class="col-4 col-md-6 rule-cell">No homologation</div>
            <div class="col-8 col-md-6 rule-cell">
              Not a limited run built to satisfy a racing regulation. Regular
              production numbers only.
            </div>
          </div>
          <div class="row rule-row">
            <div class="col-4 col-md-6 rule-cell">No special orders</div>
            <div class="col-8 col-md-6 rule-cell">
              Available off the shelf from a main dealer, not configured per
              customer at the factory.
            </div>
          </div>
          <div class="row rule-row">
            <div class="col-4 col-md-6 rule-cell">Daily usable</div>
            <div class="col-8 col-md-6 rule-cell">
              Full interior, real boot space, five seats where the base model
              has five seats.
            </div>
          </div>
          <div class="row rule-row">
            <div class="col-4 col-md-6 rule-cell">Currently manufactured</div>
            <div class="col-8 col-md-6 rule-cell">
              In production at the time of writing. No classics, no cars that
              have since been discontinued.
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home