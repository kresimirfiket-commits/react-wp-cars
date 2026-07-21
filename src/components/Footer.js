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
          <div className='d-flex justify-content-between mb-3'>
              {prevCar ? (
                <Link className="prev" to={'/car/' + prevCar.id}>← {prevCar.acf?.car_title || 'Previous'}</Link>
              ) : <span />}
              <span className='footer-span'>{currentCar?.acf?.car_title || 'Undefined'}</span>
              {nextCar ? (
                <Link className="next" to={'/car/' + nextCar.id}>{nextCar.acf?.car_title || 'Next'} →</Link>
              ) : <span />}
          </div>
          <div className='row'>
            <p>
              Daily Fast Files — profiling cars built fast on the same line as the
              slow ones
            </p>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="d-flex justify-content-between">
      <p>
        Daily Fast Files — profiling cars built fast on the same line as the
        slow ones
      </p>
    </footer>
  )
}

export default Footer