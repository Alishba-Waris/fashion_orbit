import React from 'react';
import products from '../Products'; 
import ProductCard from '../ProductCard'; 
import "../../assets/css/Home.css"; 
import carosalImg1 from "../../assets/images/WEBSITE-BANNER-WITH-GLASSES_16187a9c-4bc0-4dd2-8dc7-edd921e00ecb_1660x.webp";
import carosalImg2 from "../../assets/images/WEBSITE-BANNER_072fc028-ca1f-47b8-8d24-e5c2f8adc0b7_1660x.webp";
import carosalImg3 from "../../assets/images/WEBSITE-BANNER_097c8b89-cddc-415a-bd57-8a4cd5272b75_1660x.webp";

const Home = () => {
  return (
    <>
      
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carosalImg1} className="d-block w-100" alt="Carousel 1" />
          </div>
          <div className="carousel-item">
            <img src={carosalImg2} className="d-block w-100" alt="Carousel 2" />
          </div>
          <div className="carousel-item">
            <img src={carosalImg3} className="d-block w-100" alt="Carousel 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className='new_arrival_section'>
        <h2 className='new_arrival'>New Arrival</h2>
        <div className='line'></div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
