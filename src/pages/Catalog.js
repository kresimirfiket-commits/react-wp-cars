import React, { useEffect, useState } from 'react'
import CarSingle from '../components/CarSingle'

function Catalog() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://kmf-plavi.hr/wp-json/wp/v2/posts?per_page=100&_embed")
      .then(response => response.json())
      .then(data => {
        setCars(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className='container'>
      {cars.map(car => (
        <CarSingle key={car.id} post={car} />
      ))}
    </section>
  )
}

export default Catalog