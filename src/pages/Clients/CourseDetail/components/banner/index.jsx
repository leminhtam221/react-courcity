import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className='page-banner'>
      <div className='hvrbox'>
        <img
          src='assets/images/video-bg.png'
          alt='Mountains'
          className='hvrbox-layer_bottom'
        />
        <div className='hvrbox-layer_top'>
          <div className='container'>
            <div className='overlay-text text-left'>
              <h3>Visual Basic Essential Training</h3>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    Visual Basic Essential Training
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
