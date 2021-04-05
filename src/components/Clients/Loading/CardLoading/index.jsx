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

  return <React.Fragment>{renderHtml(length, col)}</React.Fragment>;
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
            <Skeleton width='100%' />
          </a>

          <Skeleton width='94%' />

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
