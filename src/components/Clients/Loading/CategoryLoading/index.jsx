import React from "react";
import PropTypes from "prop-types";

CategoryLoading.propTypes = {
  className: PropTypes.string,
};
CategoryLoading.defaultProps = {
  className: "right-image",
};

function CategoryLoading(props) {
  const { className } = props;
  return (
    <div className={`category-left ${className}`}>
      <div className='hvrbox'>
        <img
          src='assets/images/loading.gif'
          alt='slide 1'
          className='hvrbox-layer_bottom'
        />
        <div className='hvrbox-layer_top'></div>
      </div>
    </div>
  );
}

export default CategoryLoading;
