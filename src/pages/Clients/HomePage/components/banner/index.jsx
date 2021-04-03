import React from "react";
// import PropTypes from "prop-types";

// Banner.propTypes = {};

function Banner() {
  return (
    <div className='main-banner'>
      <div className='hvrbox'>
        <img
          src='assets/images/banner-1.png'
          alt='Mountains'
          className='hvrbox-layer_bottom'
        />
        <div className='hvrbox-layer_top'>
          <div className='container'>
            <div className='overlay-text text-center'>
              <h3>The Future Begins Here!</h3>
              <p>
                Working collaboratively to ensure every student achieves academically,
                <br /> socially, and emotionally.
              </p>
              <div className='col-md-8 offset-md-2'>
                <div className='input-group'>
                  <input
                    type='text'
                    className='form-control'
                    aria-label='Text input with dropdown button'
                    placeholder='Enter Your Search Here'
                  />
                  <div className='input-group-append styleSelect'>
                    <select id='inputGroupSelect01' defaultValue={"DEFAULT"}>
                      <option value='DEFAULT'>All Categories</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className='input-group-append'>
                    <button className='btn btn-search' type='button'>
                      <img src='assets/images/search.png' alt='search' />
                    </button>
                  </div>
                </div>
              </div>
              <div className='slider-feature'>
                <ul>
                  <li>
                    <img src='assets/images/book.png' alt='Mountains' /> 2502 Course
                  </li>
                  <li>
                    <img src='assets/images/cap.png' alt='Mountains' /> 32052 Students
                  </li>
                  <li>
                    <img src='assets/images/man.png' alt='Mountains' /> 459 Teachers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
