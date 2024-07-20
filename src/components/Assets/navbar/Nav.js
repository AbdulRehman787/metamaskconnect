import { Link } from "react-router-dom";

function Navi() {
  return (
 <>
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className="nav-link" to={'/navi'}>Home</Link>
          
        </li>
        <li class="nav-item">
        <Link className="nav-link" to={'/about'}>About</Link>
        </li>
        
        <li class="nav-item">
        <Link className="nav-link" to={'/profile'}>Profile</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to={'/service'}>Service</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
 </>
  );
}

export default Navi;