import React from "react";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.description}
        />
        <div className="card-body">
          <h5 className="card-title">{product.price}</h5>
          <p className="card-text">{product.description}</p>
        </div>
        <div className="card-body">
          <Link
            to={`/product_details/${product.id}`}
            className="btn btn-success
            "
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
