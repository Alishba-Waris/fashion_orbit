import React from 'react';
import { shoesProducts } from '../Products'; 
import ProductCard from '../ProductCard';

const Shoes = () => {
  return (
    <>
      <h2>Foot Wear</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
        {shoesProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Shoes;
