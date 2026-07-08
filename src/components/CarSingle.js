import React from 'react'
import { Link } from 'react-router'

function CarSingle({ post }) {
    if (!post) return null;

    const acf = post.acf;

    return (
        <div className="row pb-5">

            {/* Column 1 — Hero Image */}
            <div className="col-xl-4 px-4 pt-5">
                <figure className="hero-figure">
                    <img
                        className="img-fluid"
                        src={acf.hero_image_src}
                        alt={acf.hero_image_alt}
                    />
                    <figcaption
                        dangerouslySetInnerHTML={{ __html: acf.hero_figcaption }}
                    />
                </figure>
            </div>

            {/* Column 2 — Title + The Case */}
            <div className="col-xl-4 pt-3">
                <h3 className="section-label">{acf.car_title}</h3>
                <p>{acf.case_p1}</p>
                <p>{acf.case_p2}</p>
            </div>

            {/* Column 3 — Quick Facts */}
            <div className="col-xl-4 pt-3">
                <h3 className="section-label">Quick Facts</h3>
                <ul className="quick-facts">
                    <li><span>Engine</span><span>{acf.engine}</span></li>
                    <li><span>Power</span><span>{acf.power}</span></li>
                    <li><span>Torque</span><span>{acf.torque}</span></li>
                    <li><span>Transmission</span><span>{acf.transmission}</span></li>
                    <li><span>Drivetrain</span><span>{acf.drivetrain}</span></li>
                    <li><span>Built</span><span>{acf.built_at}</span></li>
                </ul>
            </div>

        </div>
    )
}

export default CarSingle