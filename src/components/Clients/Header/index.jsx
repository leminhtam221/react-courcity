import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "redux/userSlice";
import "./header.css";

function Header() {
  const listMenu = [
    { path: "/", value: "Home" },
    { path: "/courses", value: "Courses" },
  ];
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    const action = logout();
    dispatch(action);
  };
  return (
    <div className='main-menu-1x'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='main-menu'>
              <nav className='navbar navbar-expand-lg navbar-light bg-light btco-hover-menu'>
                <Link className='navbar-brand' to='/'>
                  <img
                    src='assets/images/logo.png'
                    className='d-inline-block align-top'
                    alt='logo'
                  />
                </Link>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-label='Toggle navigation'
                >
                  <span className='navbar-toggler-icon' />
                </button>

                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                  <ul className='navbar-nav ml-auto main-menu-nav'>
                    {mainMenu(listMenu)}

                    <li className='nav-item dropdown'>
                      <a className='nav-link' href='contact-us.html'>
                        Pages
                      </a>
                      {menuDropdown()}
                    </li>
                    <li className='nav-item dropdown'>
                      <a
                        className='nav-link'
                        href='blog.html'
                        id='navbarDropdownMenuLink4'
                      >
                        Blog
                      </a>
                      {menuDropdown()}
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='contact-us.html'>
                        Contact Us
                      </a>
                    </li>

                    {!user.id && (
                      <React.Fragment>
                        <li className='nav-item dropdown'>
                          <NavLink
                            className='nav-link'
                            to='/sign-up'
                            activeClassName='header-active'
                            exact
                          >
                            Sign up <span className='sr-only'>(current)</span>
                          </NavLink>
                        </li>
                        <li className='nav-item dropdown'>
                          <NavLink
                            className='nav-link'
                            to='/sign-in'
                            activeClassName='header-active'
                            exact
                          >
                            Sign in <span className='sr-only'>(current)</span>
                          </NavLink>
                        </li>
                      </React.Fragment>
                    )}

                    {user.id && (
                      <li className='nav-item'>
                        <div
                          className='nav-link'
                          style={{ padding: "10px 15px", cursor: "pointer" }}
                        >
                          Le Minh Tam
                        </div>
                        <ul className='dropdown-menu' style={{ minWidth: "100%" }}>
                          <li className='p-0' onClick={handleLogout}>
                            <div className='dropdown-item' style={{ cursor: "pointer" }}>
                              Log out
                            </div>
                          </li>
                        </ul>
                      </li>
                    )}
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

const menuDropdown = () => {
  return (
    <ul className='dropdown-menu'>
      <li>
        <a className='dropdown-item' href='index.html'>
          Menu One
        </a>
      </li>
      <li>
        <a className='dropdown-item' href='home-two.html'>
          Menu Two
        </a>
      </li>
    </ul>
  );
};

const mainMenu = (listMenu) => {
  return listMenu.map((item, index) => (
    <li className='nav-item dropdown' key={index}>
      <NavLink className='nav-link' to={item.path} activeClassName='header-active' exact>
        {item.value} <span className='sr-only'>(current)</span>
      </NavLink>
      {menuDropdown()}
    </li>
  ));
};
export default Header;
