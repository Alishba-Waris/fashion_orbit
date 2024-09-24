import logo from "../../assets/images/logo.png";
import "../../assets/css/Header.css";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="navbar navbar-dark nav_space bg_clr">

        <nav className="navbar navbar-expand-lg ">
          <nav className="navbar">
            <div className="container">
              <NavLink className="navbar-brand" to="/">
                <img src={logo} alt="" width="70" height="50" />
              </NavLink>
            </div>
          </nav>
          <div className="container-fluid">

            <NavLink className="navbar-brand logo_name" to="/">FashionOrbit</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav nav_elements">
                <li className="nav-item header_li">
                  <NavLink activeClassName="active" className="nav-link " to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link " to="/shoes">Shoes</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link " to="/clothes">Clothes</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link " to="/bags">Bags</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link " to="/about_us">About_us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link " to="/contact_us">Contact_us</NavLink>
                </li>

              </ul>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-light ">
          <div className="container-fluid">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </nav>


    </>
  );
}

export default App;