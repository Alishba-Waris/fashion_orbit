import React from 'react'
import allProducts from './allProducts'

const ClotheDetails = (product) => {
  return (
    <>
        <div className="container p_details ">
        <div className="card h-100 detailed_img">
          <img
            src={allProducts.image}
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
          <div className="mt-5">
            <p>Size chart</p>
          </div>
          
          <div
            className="btn-group"
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
          </div>
    </div>
    </>
  )
}

export default ClotheDetails