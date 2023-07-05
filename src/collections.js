import React, { useState, useEffect } from 'react';
import "./collections.css";

function CarCollection({ year, make, minPrice, maxPrice }) {
  const [filteredCars, setFilteredCars] = useState([]);

  const cars = [
    { id: 1, make: 'Toyota', year: 2022, price: 10000 },
    { id: 2, make: 'Honda', year: 2021, price: 15000 },
    { id: 3, make: 'Ford', year: 2020, price: 20000 },
    // Add more car objects as needed
  ];

  useEffect(() => {
    // Filter cars based on search parameters
    const newFilteredCars = cars.filter((car) => {
      if (year && car.year.toString() !== year) {
        return false;
      }
      if (make && car.make !== make) {
        return false;
      }
      if (minPrice && car.price < parseInt(minPrice)) {
        return false;
      }
      if (maxPrice && car.price > parseInt(maxPrice)) {
        return false;
      }
      return true;
    });
    setFilteredCars(newFilteredCars);
  }, [year, make, minPrice, maxPrice]);

  return (
    <div className="car-collection">
      <h4>Results</h4>
      {filteredCars.length > 0 ? (
        filteredCars.map((car) => (

          <div key={car.id}>
            <h3>{car.make}</h3>
            <p>Year: {car.year}</p>
            <p>Price: {car.price}</p>
            {/* Add more car details as needed */}
          </div>
        ))
      ) : (
        <p>No cars found</p>
      )}
    </div>
  );
}

export default CarCollection;
