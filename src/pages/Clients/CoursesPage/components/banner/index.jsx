import React from "react";

function Banner() {
  return (
    <div className='main-banner course-list-banner'>
      <div className='hvrbox'>
        <img
          src='assets/images/banner-1.png'
          alt='Mountains'
          className='hvrbox-layer_bottom'
        />
        <div className='hvrbox-layer_top'>
          <div className='container'>
            <div className='overlay-text text-center'>
              <h3>
                <b>2,579</b> Online Course &amp; Video Tutorials!
              </h3>
              <div className='col-md-8 offset-md-2'>
                <div className='input-group'>
                  <input
                    type='text'
                    className='form-control'
                    aria-label='Text input with dropdown button'
                    placeholder='Enter Your Search Here'
                  />
                  <div className='input-group-append'>
                    <button className='btn btn-search' type='button'>
                      <i className='fas fa-search' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
