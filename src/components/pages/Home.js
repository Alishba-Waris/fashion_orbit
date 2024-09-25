import React from 'react'
import "../../assets/css/Home.css";
import carosalImg1 from "../../assets/images/WEBSITE-BANNER-WITH-GLASSES_16187a9c-4bc0-4dd2-8dc7-edd921e00ecb_1660x.webp";
import carosalImg2 from "../../assets/images/WEBSITE-BANNER_072fc028-ca1f-47b8-8d24-e5c2f8adc0b7_1660x.webp";
import carosalImg3 from "../../assets/images/WEBSITE-BANNER_097c8b89-cddc-415a-bd57-8a4cd5272b75_1660x.webp";
import new_arrival1 from "../../assets/images/p_img5.png";
import new_arrival2 from "../../assets/images/p_img3.png";
import new_arrival3 from "../../assets/images/p_img11.png";
import new_arrival4 from "../../assets/images/p_img15.png";
import new_arrival5 from "../../assets/images/p_img17.png";
import new_arrival6 from "../../assets/images/p_img42.png";
import new_arrival7 from "../../assets/images/p_img44.png";
import new_arrival8 from "../../assets/images/p_img48.png";
import new_arrival9 from "../../assets/images/p_img30.png";
import new_arrival10 from "../../assets/images/p_img14.png";
import new_arrival11 from "../../assets/images/p_img51.png";
import new_arrival12 from "../../assets/images/p_img47.png";



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
            <img src={carosalImg1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carosalImg2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carosalImg3} className="d-block w-100" alt="..." />
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

      <div>
        <div>
          <h2 className='new_arrival'>New Arrival</h2>
        </div>
        <div className='line'></div>
      </div>

      <div className='margin'></div>

      <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
        <div className="col">
          <div className="card h-100">
            <img src={new_arrival1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rs. 1,299</h5>
              <p className="card-text"> Find The Perfect Style at Unbelievable Prices! </p>
            </div>
            <div class="card-body">
              <a href="/" class="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={new_arrival2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rs. 1,500</h5>
              <p className="card-text"> Find The Perfect Style at Unbelievable Prices! </p>
            </div>
            <div class="card-body">
              <a href="/" class="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={new_arrival3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rs. 1,509</h5>
              <p className="card-text"> Find The Perfect Style at Unbelievable Prices! </p>
            </div>
            <div class="card-body">
              <a href="/" class="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
      </div>



      <div className='margin'></div>

      <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
        <div className="col">
          <div className="card h-100">
            <img src={new_arrival10} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rs. 2,599</h5>
              <p className="card-text"> Find The Perfect Style at Unbelievable Prices! </p>
            </div>
            <div class="card-body">
              <a href="/" class="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={new_arrival11} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rs. 1,999</h5>
              <p className="card-text"> Find The Perfect Style at Unbelievable Prices! </p>
            </div>
            <div class="card-body">
              <a href="/" class="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={new_arrival12} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rs. 1,799</h5>
              <p className="card-text"> Find The Perfect Style at Unbelievable Prices! </p>
            </div>
            <div class="card-body">
              <a href="/" class="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
      </div>



      <div className='margin'></div>

      <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
        <div className="col">
          <div className="card h-100">
            <img src={new_arrival4} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rs. 1,599</h5>
              <p className="card-text"> Find The Perfect Style at Unbelievable Prices! </p>
            </div>
            <div class="card-body">
              <a href="/" class="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={new_arrival5} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rs. 1,599</h5>
              <p className="card-text"> Find The Perfect Style at Unbelievable Prices! </p>
            </div>
            <div class="card-body">
              <a href="/" class="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={new_arrival6} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rs. 1,599</h5>
              <p className="card-text"> Find The Perfect Style at Unbelievable Prices! </p>
            </div>
            <div class="card-body">
              <a href="/" class="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
      </div>



      <div className='margin'></div>

      <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
        <div className="col">
          <div className="card h-100">
            <img src={new_arrival7} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rs. 1,500</h5>
              <p className="card-text"> Find The Perfect Style at Unbelievable Prices! </p>
            </div>
            <div class="card-body">
              <a href="/" class="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={new_arrival8} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rs. 3,099</h5>
              <p className="card-text"> Find The Perfect Style at Unbelievable Prices! </p>
            </div>
            <div class="card-body">
              <a href="/" class="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={new_arrival9} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rs. 2,599</h5>
              <p className="card-text"> Find The Perfect Style at Unbelievable Prices! </p>
            </div>
            <div class="card-body">
              <a href="/" class="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home