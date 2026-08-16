import React, { useEffect } from 'react'
import CarSingle from '../components/CarSingle'
import { useCars } from '../context/CarsContext'
import { useLoading } from '../context/LoadingContext'
import "../css_files/Catalog.css"

function Catalog() {
  const { pagedCars, loading, error } = useCars()
  const { startLoading, completeLoading } = useLoading()

  useEffect(() => {
    if (loading) startLoading()
    else completeLoading()
  }, [loading])

  if (loading) return null;
  if (error) return <p>Error: {error}</p>;

  return (
    <main>
      <div className='container-fluid'>
        {pagedCars.map(car => (
          <CarSingle key={car.id} post={car} />
        ))}
      </div>
    </main>
  )
}

export default Catalog