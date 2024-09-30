import React from 'react';
import { clothesProducts } from '../Products'; 
import ProductCard from '../ProductCard'; 

const Clothes = () => {
  return (
    <>
      <h2>Foot Wear</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
        {clothesProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Clothes;
