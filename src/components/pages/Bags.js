import React from 'react';
import  allProducts from '../allProducts'; 
import ProductCard from '../ProductCard'; 

const Bags = () => {
  return (
    <>
     <div className="new_arrival_section">
        <h2 className="new_arrival">Bags</h2>
        <div className="line"></div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto ">
        {allProducts.bagsProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Bags;
