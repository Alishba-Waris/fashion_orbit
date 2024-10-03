import React, { useState } from "react";
import { useParams } from "react-router-dom";
import allProducts from "./allProducts";
import "../assets/css/ProductDetails.css";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const product = allProducts.shoesProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div>
      <div className="container p_details">
        <div>
          <img src={product.image} alt={product.description} />
        </div>
        <div>
          <div>
            <h5>{product.description}</h5>
          </div>
          <div className="mt-5 p_clr">
            <h4>{product.price}</h4>
          </div>
          <div className="mt-5">
            <p>Size chart</p>
          </div>
          <div
            className="btn-group chart"
            role="group"
            aria-label="Basic outlined example"
          >
            <button type="button" className="btn btn-outline-success">
              Small
            </button>
            <button type="button" className="btn btn-outline-success">
              Medium
            </button>
            <button type="button" className="btn btn-outline-success">
              Large
            </button>
          </div>

          <div className="d-flex align-items-center gap-3 ">
            
            <div className="d-flex align-items-center border rounded-pill px-4 py-1 q_cart">
              <button
                onClick={decreaseQuantity}
                className="q_btn p-0 text-dark fs-4"
              >
                −
              </button>
              <span className="mx-3 fs-5">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="q_btn p-0 text-dark fs-4"
              >
                +
              </button>
            </div>

            <button className="btn btn-dark px-4 rounded-pill py-2 q_cart" >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
