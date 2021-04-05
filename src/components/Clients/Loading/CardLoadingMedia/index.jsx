import React from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

CardLoadingMedia.propTypes = {
  length: PropTypes.number,
};
CardLoadingMedia.defaultProps = {
  length: 1,
};

function CardLoadingMedia(props) {
  const { length } = props;
  return Array.from(new Array(length)).map((item, index) => (
    <div className='media' key={index}>
      <div className='media-left-image'>
        <div className='hvrbox'>
          <Skeleton width='420px' height='302px' />
        </div>
      </div>
      <div className='media-body'>
        <h2>
          <a href='course-single-one.html'>
            <Skeleton width='100%' />
            <Skeleton width='100%' />
            <Skeleton width='100%' />
            <Skeleton width='100%' />
            <Skeleton width='100%' />
            <Skeleton width='100%' />
            <Skeleton width='100%' />
            <Skeleton width='100%' />
          </a>
        </h2>
      </div>
    </div>
  ));
}

export default CardLoadingMedia;
