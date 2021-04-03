import React from "react";

function Header() {
  return (
    <div className="main-menu-1x">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-menu">
              <nav className="navbar navbar-expand-lg navbar-light bg-light btco-hover-menu">
                <a className="navbar-brand" href="#/">
                  <img
                    src="assets/images/logo.png"
                    className="d-inline-block align-top"
                    alt="logo"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto main-menu-nav">
                    <li className="nav-item dropdown active">
                      <a className="nav-link" href="#/" id="navbarDropdownMenuLink1">
                        Home <span className="sr-only">(current)</span>
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                        <li>
                          <a className="dropdown-item" href="index.html" target="_blank">
                            Home One
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="home-two.html" target="_blank">
                            Home Two
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about-us.html">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#/" id="navbarDropdownMenuLink2">
                        Pages
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                        <li>
                          <a className="dropdown-item" href="learning-path.html">
                            Learning Path
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item dropdown-toggle" href="course-list.html">
                            Course
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="course-list.html">
                                All Course
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="course-single-one.html">
                                Course Single One
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="course-single-two.html">
                                Course Single Two
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item dropdown-toggle" href="career.html">
                            Carrer
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="career.html">
                                Carrer
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="career-single.html">
                                Carrer Single
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item dropdown-toggle" href="our-team.html">
                            Events{" "}
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="events.html">
                                {" "}
                                Events
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="events-details.html">
                                Events Details{" "}
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item" href="404.html">
                            404 Page
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="comming-soon.html">
                            Comming Soon
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="components.html">
                            Components
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="blog.html" id="navbarDropdownMenuLink4">
                        Blog
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink4">
                        <li>
                          <a className="dropdown-item" href="blog.html">
                            Grid View
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="blog-list.html">
                            List View
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="blog-single.html">
                            Blog Single
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact-us.html">
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item sign-in">
                      <a className="nav-link" href="sign-in.html">
                        Sign in
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="btn-small" href="#/">
                        Get Started
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
