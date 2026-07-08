import React from "react";
import "../assets/css/productCard.css"
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
  const productId = product._id || product.id;

  return (
    <div className="col">
      <article className="product-card">
        <div className="product-card-image">
          <img src={product.image} alt={product.description} />
        </div>
        <div className="product-card-body">
          <div>
            <h5 className="product-card-title">Rs. {product.price}</h5>
            <p className="product-card-text">{product.description}</p>
          </div>
          <div className="product-card-footer">
            <span className="product-price">Rs. {product.price}</span>
            <Link to={`/product_details/${productId}`} className="product-card-link">
              Shop Now
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
