import React, { useState } from "react";
import { useParams } from "react-router-dom";
import allProducts from "./allProducts";
import "../assets/css/ProductDetails.css";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const allProductsArray = Object.values(allProducts).flat();
  const product = allProductsArray.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const productCategory = (() => {
    if (allProducts.Product.some((p) => p.id === product.id))
      return "new_arrival";
    if (allProducts.shoesProducts.some((p) => p.id === product.id))
      return "shoes";
    if (allProducts.bagsProducts.some((p) => p.id === product.id))
      return "bags";
    if (allProducts.clothesProducts.some((p) => p.id === product.id))
      return "clothes";
    return "general";
  })();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className={`container p_details ${productCategory}-page`}>
      <div className={`card h-100 detailed_img ${productCategory}-img`}>
        <img
          src={product.image}
          className="card-img-top"
          alt={product.description}
        />
      </div>

      <div>
        <div>
          <h5>{product.description}</h5>
        </div>
        <div className="mt-5 p_clr">
          <h4>{product.price}</h4>
        </div>

        {productCategory === "new_arrival" && (
          <>
            <div className="clothes-details">
              <p>
                Available in different sizes and colors. Check the size chart
                below.
              </p>
              <div className="chart">
                <button
                  type="button"
                  className="btn btn-outline-success clothSize"
                >
                  Small
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success clothSize"
                >
                  Medium
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success clothSize"
                >
                  Large
                </button>
              </div>
            </div>
          </>
        )}

        {productCategory === "shoes" && (
          <>
            <div className="shoe-details">
              <p>These shoes are available in multiple sizes and colors.</p>
              <div className=" chart">
                <button
                  type="button"
                  className="btn btn-outline-success shoeSize"
                >
                  46
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success shoeSize"
                >
                  47
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success shoeSize"
                >
                  48
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success shoeSize"
                >
                  49
                </button>
              </div>
            </div>
          </>
        )}

        {productCategory === "bags" && (
          <>
            <div className="bag-details chart">
              <p>This bag is available in various styles and materials.</p>
              <div className="chart">
                <p className="">Choose Material:</p>
                <button
                  type="button"
                  className="btn btn-outline-success clothSize"
                >
                  Leather
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success clothSize"
                >
                  Canvas
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success clothSize"
                >
                  Nylon
                </button>
              </div>
            </div>
          </>
        )}

        {productCategory === "clothes" && (
          <>
            <div className="clothes-details">
              <p>
                Available in different sizes and colors. Check the size chart
                below.
              </p>
              <div className="chart">
                <button
                  type="button"
                  className="btn btn-outline-success clothSize"
                >
                  Small
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success clothSize"
                >
                  Medium
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success clothSize"
                >
                  Large
                </button>
              </div>
            </div>
          </>
        )}

        <div className="d-flex align-items-center gap-3 mt-5">
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
          <button
            type="button"
            className="btn btn-dark px-4 rounded-pill py-2 q_cart"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            ADD TO CART
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Cart
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  Item is added to your shopping Cart
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Continue Shopping
                  </button>
                  <button type="button" className="btn btn-dark">
                    View Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
