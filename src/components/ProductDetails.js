import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import allProducts from "./allProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/CartSlice";
import "../assets/css/ProductDetails.css";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const allProductsArray = Object.values(allProducts).flat();
  const product = allProductsArray.find((p) => p.id === parseInt(id));

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

  useEffect(() => {
    if (productCategory === "new_arrival"){
        setSelectedSize("Small");
    }else if (productCategory === "clothes") {
      setSelectedSize("Small"); 
    } else if (productCategory === "shoes") {
      setSelectedSize(46); 
    } else if (productCategory === "bags") {
      setSelectedSize("Leather"); 
    }
  }, [productCategory]);

  if (!product) {
    return <div>Product not found</div>;
  }


  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
      dispatch(addToCart({ product, quantity, size: selectedSize }));
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className={`container p_details`}>
      <div className={`card h-100 detailed_img`}>
        <img
          src={product.image}
          className="card-img-top"
          alt={product.description}
        />
      </div>

      <div className="p_detail_resp">
        <div>
          <h5>{product.description}</h5>
        </div>
        <div className="mt-5 p_clr">
          <h4>Rs.{product.price}</h4>
        </div>

        {productCategory === "new_arrival" && (
          <>
            <div className="clothes-details">
              <p>
                Available in different sizes and colors. Check the size chart
                below.
              </p>
              <div className="chart">
                {["Small", "Medium", "Large"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`btn btn-outline-success clothSize ${
                      selectedSize === size ? "active" : ""
                    }`}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </button>
                ))}
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
                {["Small", "Medium", "Large"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`btn btn-outline-success clothSize ${
                      selectedSize === size ? "active" : ""
                    }`}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {productCategory === "shoes" && (
          <>
            <div className="shoe-details">
              <p>These shoes are available in multiple sizes and colors.</p>
              <div className="chart">
                {[46, 47, 48, 49].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`btn btn-outline-success shoeSize ${
                      selectedSize === size ? "active" : ""
                    }`}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </button>
                ))}
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
                {["Leather", "Canvas", "Nylon"].map((material) => (
                  <button
                    key={material}
                    type="button"
                    className={`btn btn-outline-success clothSize ${
                      selectedSize === material ? "active" : ""
                    }`}
                    onClick={() => handleSizeClick(material)}
                  >
                    {material}
                  </button>
                ))}
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
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
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
                <div className="modal-footer" data-bs-dismiss="modal">
                  <Link className="btn btn-secondary" to={"/"}>
                    Continue Shopping
                  </Link>
                  <Link className="btn btn-dark" to={"/view_cart"}>
                    View Cart
                  </Link>
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
