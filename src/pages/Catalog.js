import React from 'react'
import CarSingle from '../components/CarSingle'
import { useCars } from '../context/CarsContext'
import "../css_files/Catalog.css"

function Catalog() {
  const { pagedCars, loading, error } = useCars();

  if (loading) return <p>Loading...</p>;
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