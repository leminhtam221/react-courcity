import React from "react";
import Skeleton from "react-loading-skeleton";
import PropTypes from "prop-types";

CardLoaing.propTypes = {
  length: PropTypes.number,
  col: PropTypes.number,
};

CardLoaing.defaultProps = {
  length: 1,
  col: 4,
};

function CardLoaing(props) {
  const { length, col } = props;

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='row'>{renderHtml(length, col)}</div>
        </div>
      </div>
    </div>
  );
}

const renderHtml = (length, col) => {
  return Array.from(new Array(length)).map((item, index) => (
    <div className={`col-md-${col}`} key={index}>
      <div className='single-course'>
        <div className='hvrbox'>
          <Skeleton width='100%' height={150} />
        </div>
        <div className='single-course-content'>
          <a href='course-single.html'>
            <Skeleton />
            <Skeleton width='76%' />
          </a>

          <p className='d-flex justify-content-between align-items-center'>
            <Skeleton width={70} />

            <span className='d-flex justify-content-between align-items-center'>
              <Skeleton width={40} className='mr-2' />
              <Skeleton width={40} />
            </span>
          </p>
          <h3 className='d-flex justify-content-between'>
            <span>
              <Skeleton width={120} />
            </span>

            <span>
              <Skeleton width={70} />
            </span>
          </h3>
        </div>
      </div>
    </div>
  ));
};

export default CardLoaing;
