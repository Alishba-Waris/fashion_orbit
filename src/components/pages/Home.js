import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "../ProductCard";
import "../../assets/css/Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get("http://localhost:5000/api/products?category=new_arrival", {
        signal: controller.signal,
      })
      .then((response) => setProducts(response.data))
      .catch((error) => {
        if (error.name === 'CanceledError' || error.message === 'canceled') return;
        console.error("Error fetching products:", error);
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/WEBSITE-BANNER-WITH-GLASSES_16187a9c-4bc0-4dd2-8dc7-edd921e00ecb_1660x.webp" className="d-block w-100" alt="Carousel 1" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Discover the latest fashion arrivals</h2>
              <p>Elevate your wardrobe with curated styles and premium looks.</p>
              <Link to="/bags" className="hero-cta">Shop Bags</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/WEBSITE-BANNER_072fc028-ca1f-47b8-8d24-e5c2f8adc0b7_1660x.webp" className="d-block w-100" alt="Carousel 2" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Step into bold new shoes</h2>
              <p>Find your next statement pair with comfort and style.</p>
              <Link to="/shoes" className="hero-cta">Shop Shoes</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/WEBSITE-BANNER_097c8b89-cddc-415a-bd57-8a4cd5272b75_1660x.webp" className="d-block w-100" alt="Carousel 3" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Fresh looks for every day</h2>
              <p>Feel confident in effortless outfits designed for your lifestyle.</p>
              <Link to="/clothes" className="hero-cta">Shop Clothes</Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="new_arrival_section">
        <h2 className="new_arrival">New Arrival</h2>
        <div className="line"></div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 section-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      
    </>
  );
};

export default Home;
