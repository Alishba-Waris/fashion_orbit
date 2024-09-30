import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../components/Products'; 

const ProductDetails = () => {
  const { id } = useParams(); 
  const product = products.find(p => p.id === parseInt(id)); 

  if (!product) {
    return <div>Product not found</div>;
  }
  
  return (
    <div>
      <h2>{product.description}</h2>
      <img src={product.image} alt={product.description} />
      <h3>{product.price}</h3>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
