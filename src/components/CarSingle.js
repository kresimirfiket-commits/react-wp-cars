import React from 'react'
import { Link } from 'react-router'
import "../css_files/CarSingle.css"

function CarSingle({ post }) {
    if (!post) return null;

    const acf = post.acf;

    return (
        <div className="row pb-3 pb-xl-4 pb-xxl-5">

            {/* Column 1 — Hero Image */}
            <div className="col-md-7 col-lg-4 pe-2 pe-xl-4 pt-3 mx-md-auto">
                <figure className="hero-figure-1">
                    <Link to={'/car/' + post.id}><img
                        className="img-fluid"
                        src={acf.hero_image_src}
                        alt={acf.hero_image_alt}
                    /></Link>
                    <figcaption
                        dangerouslySetInnerHTML={{ __html: acf.hero_figcaption }}
                    />
                </figure>
            </div>

            {/* Column 2 — Title + The Case */}
            <div className="col-md-6 col-lg-4 pe-2 pe-md-3 pe-xl-4 pt-3">
                <Link className='catalog-link' to={'/car/' + post.id}><h3 className="section-label-1">{acf.car_title}</h3></Link>
                <p className='the-case-1'>{acf.case_p1}</p>
                <p className='the-case-1'>{acf.case_p2}</p>
            </div>

            {/* Column 3 — Quick Facts */}
            <div className="col-md-6 col-lg-4 ps-md-3 pt-3">
                <Link className='catalog-link' to={"/car/" + post.id} ><h3 className="section-label-1">Quick Facts</h3></Link>
                <ul className="quick-facts-1">
                    <li><span>Engine</span><span>{acf.qf_engine}</span></li>
                    <li><span>Power</span><span>{acf.qf_power}</span></li>
                    <li><span>Torque</span><span>{acf.qf_torque}</span></li>
                    <li><span>Transmission</span><span>{acf.qf_transmission}</span></li>
                    <li><span>Drivetrain</span><span>{acf.qf_drivetrain}</span></li>
                    <li><span>Built</span><span>{acf.qf_built}</span></li>
                </ul>
            </div>

        </div>
    )
}

export default CarSingle