import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import DropdownAvatar from "./DrowpdownAvatar";
import { Link, useLocation } from "react-router-dom";

const NavbarComponent = ({ logo, avatar }) => {
  const location = useLocation();
  console.log({ location });
  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-black">
        {/* <Navbar.Brand href={this.props.logo}>Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form> */}
        <div className="container-fluid">
          <a className="navbar-brand" href="http://ubeytdemir.me/netflix-ui">
            <img src={logo} id="logo" className="logo-img" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="http://ubeytdemir.me/netflix-ui">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link to="/tv-shows" className="navbar-router-links">
                  <div className={location.pathname === "/tv-shows" ? "nav-link active" : "nav-link"} href="#">
                    Tv Shows
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Movie
                </a>
              </li>
              {/* <li className="nav-item">
                <Link to="/movie-details" className="navbar-router-links">
                  <div className={location.pathname === "/movie-details" ? "nav-link active" : "nav-link"} href="#">
                    Movie Details
                  </div>
                </Link>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Recently Added
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My List
                </a>
              </li>
            </ul>

            <ul className="navbar-nav" id="profile-navbar">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  KIDS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bell-fill icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                </a>
              </li>

              <li className="nav-item">
                <DropdownAvatar avatar={avatar} />
                {/* <div class="btn-group">
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={this.props.avatar} id="avatar" />
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a class="dropdown-item" href="http://ubeytdemir.me/netflix-ui/profile.html">
                          <div class="d-flex align-items-center">
                            <img src={this.props.avatar} id="avatar-small" />
                            Ubeyt
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="http://ubeytdemir.me/netflix-ui/profile.html">
                          Manage Profiles
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="http://ubeytdemir.me/netflix-ui/accounts.html">
                          Account
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Help Center
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Signout Netflix
                        </a>
                      </li>
                    </ul>
                  </div> */}
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
