import logo from "../../assets/images/logo.png";
import { VscAccount } from "react-icons/vsc";
import "../../assets/css/Header.css";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const isLoggedIn = !!userId;
  const isSignedUp = !!userId;

  const handleUserAccountClick = () => {
    if (isLoggedIn) {
      navigate(`/user_account/${userId}`);
    } else if(isSignedUp) {
      navigate(`/user_account/${userId}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <nav className="navbar navbar-dark nav_space bg_clr">
        <NavLink className="navbar-brand logo_name" to="/">
          FashionOrbit
        </NavLink>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav nav_elements head_elements">
                <li className="nav-item header_li">
                  <NavLink activeClassName="active" className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/shoes">
                    Shoes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/clothes">
                    Clothes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/bags">
                    Bags
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/about_us">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/contact_us">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <nav className="navbar navbar-light">
                    <div className="container-fluid">
                      <nav className="navbar icons">
                        <div className="container">
                          <NavLink className="navbar-brand" to="/view_cart">
                            <img className="cart_img" src={logo} alt="cart" />
                          </NavLink>
                          <button className="acc_icon" onClick={handleUserAccountClick}>
                            <VscAccount />
                          </button>
                        </div>
                      </nav>
                    </div>
                  </nav>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </>
  );
};

export default Header;
