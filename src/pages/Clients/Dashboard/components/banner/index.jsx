import React from "react";

function Banner(props) {
  return (
    <div className='page-banner'>
      <div className='hvrbox'>
        <img
          src='assets/images/mountain.jpg'
          alt='Mountains'
          style={{ height: "200px" }}
          className='hvrbox-layer_bottom'
        />
        <div className='hvrbox-layer_top'></div>
      </div>
    </div>
  );
}

export default Banner;
