import React from "react";
import PropTypes from "prop-types";
import "./pagination.css";

Pagination.propTypes = {
  page: PropTypes.number,
  limit: PropTypes.number,
  total: PropTypes.number,
  onPageChange: PropTypes.func,
  onPagePrevious: PropTypes.func,
  onPageNext: PropTypes.func,
};

Pagination.defaultProps = {
  page: 1,
  limit: 6,
  total: 0,
  onPageChange: null,
  onPagePrevious: null,
  onPageNext: null,
};

function Pagination(props) {
  const { total, limit, page, onPageChange, onPagePrevious, onPageNext } = props;
  const totalPageNumber = Math.ceil(total / limit);
  const handlePagePrevious = () => {
    if (page <= 1) return;
    onPagePrevious();
  };
  const handlePageNext = () => {
    if (page >= totalPageNumber) return;
    onPageNext();
  };
  return (
    <div className='col-md-12'>
      <div className='course-pagination'>
        <ul className='pagination'>
          <li
            className={`page-item cursor ${page <= 1 ? "disabled" : ""}`}
            onClick={() => handlePagePrevious()}
          >
            <span className='page-link'>
              <i className='fas fa-angle-left' />
            </span>
          </li>

          {renderPageNumber(totalPageNumber, page, onPageChange)}

          <li
            className={`page-item cursor ${page >= totalPageNumber ? "disabled" : ""}`}
            onClick={() => handlePageNext()}
          >
            <span className='page-link'>
              <i className='fas fa-angle-right' />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

const renderPageNumber = (total, page, onPageChange) => {
  return Array.from(new Array(total)).map((item, index) => (
    <li
      className={`page-item cursor ${page === index + 1 ? "active" : ""}`}
      key={index}
      onClick={() => {
        onPageChange(index + 1);
      }}
    >
      <span className='page-link'>{index + 1}</span>
    </li>
  ));
};

export default Pagination;
