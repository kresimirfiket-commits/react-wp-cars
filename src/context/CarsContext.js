import { createContext, useContext, useEffect, useState } from 'react'

const CarsContext = createContext(null)

const PER_PAGE = 4

export function CarsProvider({ children }) {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    fetch("https://kmf-plavi.hr/wp-json/wp/v2/posts?per_page=100&_embed")
      .then(response => response.json())
      .then(data => {
        setCars(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const pageCount = Math.ceil(cars.length / PER_PAGE)
  const pagedCars = cars.slice(currentPage * PER_PAGE, currentPage * PER_PAGE + PER_PAGE)

  const value = {
    cars,
    pagedCars,
    loading,
    error,
    currentPage,
    setCurrentPage,
    pageCount,
  }

  return <CarsContext.Provider value={value}>{children}</CarsContext.Provider>
}

export function useCars() {
  const ctx = useContext(CarsContext)
  if (!ctx) throw new Error('useCars must be used within a CarsProvider')
  return ctx
}