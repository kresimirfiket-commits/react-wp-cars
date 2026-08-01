import React from 'react'
import { Link, useLocation } from 'react-router'
import ReactPaginate from 'react-paginate'
import { useCars } from '../context/CarsContext'
import "../css_files/Footer.css"

function Footer() {
  const location = useLocation()
  const { cars, currentPage, setCurrentPage, pageCount } = useCars()

  const isCatalog = location.pathname.startsWith('/catalog')
  const carMatch = location.pathname.match(/^\/car\/(\d+)/)

  if (isCatalog) {
    if (pageCount <= 1) return null

    return (
      <footer className="d-flex justify-content-center py-4">
        <ReactPaginate
          previousLabel="← Prev"
          nextLabel="Next →"
          breakLabel="…"
          pageCount={pageCount}
          forcePage={currentPage}
          onPageChange={({ selected }) => setCurrentPage(selected)}
          containerClassName="pagination-1"
          pageClassName="page-item-1"
          previousClassName="page-item-1"
          nextClassName="page-item-1"
          breakClassName="page-item-1"
          activeClassName="active"
          disabledClassName="disabled"
        />
      </footer>
    )
  }

  if (carMatch) {
    const currentId = Number(carMatch[1])
    const index = cars.findIndex(car => car.id === currentId)
    const currentCar = index >= 0 ? cars[index] : null
    const prevCar = index > 0 ? cars[index - 1] : null
    const nextCar = index >= 0 && index < cars.length - 1 ? cars[index + 1] : null

    return (
      <footer>
        <div className='container-fluid'>
          <div className='row justify-content-between mb-3'>
            <div className='col-4 d-flex justify-content-start'>
              {prevCar ? (
                <Link className="prev" to={'/car/' + prevCar.id}>← {prevCar.acf?.car_title || 'Previous'}</Link>
              ) : <span />}
            </div>
            <div className='col-4 d-flex justify-content-center'>
              <span className='footer-span'>{currentCar?.acf?.car_title || 'Undefined'}</span>
            </div>
            <div className='col-4 d-flex justify-content-end'>
              {nextCar ? (
                <Link className="next" to={'/car/' + nextCar.id}>{nextCar.acf?.car_title || 'Next'} →</Link>
              ) : <span />}
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col bottom'>
            <p><Link className='link' to="/">Home</Link></p>
          </div>
          <div className='col bottom'>
            <p><Link className='link' to="/catalog">Catalog</Link></p>
          </div>
          <div className='col bottom'>
            <p><Link className='link' to="/about">About</Link> </p>
          </div>
          <div className='col bottom'>
            <p><Link className='link' to="/contact">Contact</Link></p>
          </div>
          <div className='col bottom'>
            <p><Link className='link' to="/privacypolicy">Privacy</Link></p>
          </div>
          <div className='col bottom'>
            <p><a className='link' href="mailto:kresimir.fiket@kmf-plavi.hr">email</a></p>
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer