import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProductCard from '../ProductCard'; 

const Bags = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products?category=bags")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
     <div className="new_arrival_section">
        <h2 className="new_arrival">Bags</h2>
        <div className="line"></div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto ">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Bags;
