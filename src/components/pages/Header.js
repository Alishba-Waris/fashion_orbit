import logo from "../../assets/images/logo.png";
import "../../assets/css/Header.css"


function App() {
  return (
    <>
    <nav className="navbar navbar-dark nav_space bg_clr">

    <nav className="navbar navbar-expand-lg ">
    <nav class="navbar">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="" width="70" height="50"/>
          </a>
        </div>
      </nav>
          <div className="container-fluid">
          
      <a className="navbar-brand logo_name" href="/">FashionOrbit</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Shoes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Clothes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Bags</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Pricing</a>
          </li> */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="/">About Us</a></li>
              <li><a className="dropdown-item" href="/">Contact Us</a></li>
              <li><a className="dropdown-item" href="/">Login</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <nav className="navbar navbar-light ">
  <div className="container-fluid">
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-light" type="submit">Search</button>
    </form>
  </div>
</nav>
  </nav>
  </>
  );
}

export default App;