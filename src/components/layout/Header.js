import { VscAccount } from "react-icons/vsc";
import "../../assets/css/Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.userId); 
  const isLoggedIn = !!userId;

  const handleUserAccountClick = () => {
    if (isLoggedIn) {
      navigate(`/user_account/${userId}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg nav_space bg_clr header-navbar">
        <div className="container-fluid align-items-center">
          <NavLink className="navbar-brand logo_name" to="/">
            FashionOrbit
          </NavLink>
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
            <ul className="navbar-nav ms-auto header-nav">
              <li className="nav-item header_li">
                <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/shoes">
                  Shoes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/clothes">
                  Clothes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/bags">
                  Bags
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/about_us">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/contact_us">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="header-actions">
              <NavLink className="cart-link" to="/view_cart">
                <img className="cart_img" src="/images/logo.png" alt="cart" />
              </NavLink>
              <button className="acc_icon" onClick={handleUserAccountClick}>
                <VscAccount />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
