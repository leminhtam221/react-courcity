import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onPageChange, onPageNext, onPagePrevious } from "redux/paginationSlice";
import "./pagination.css";

function Pagination() {
  const pagination = useSelector((state) => state.pagination);
  const { _limit, _page, total } = pagination;
  const dispatch = useDispatch();

  const totalPageNumber = Math.ceil(total / _limit);
  const handlePagePrevious = () => {
    if (_page <= 1) return;
    const action = onPagePrevious();
    dispatch(action);
  };
  const handlePageNext = () => {
    if (_page >= totalPageNumber) return;
    const action = onPageNext();
    dispatch(action);
  };
  const handlePageChange = (pageNumber) => {
    const action = onPageChange(pageNumber);
    dispatch(action);
  };

  return (
    <div className='col-md-12'>
      <div className='course-pagination mt-0'>
        <ul className='pagination'>
          <li
            className={`page-item cursor ${_page <= 1 ? "hide-item" : ""}`}
            onClick={() => handlePageChange(1)}
          >
            <span className='page-link'>
              <i className='fas fa-angle-left' />
              <i className='fas fa-angle-left' />
            </span>
          </li>

          <li
            className={`page-item cursor ${_page <= 1 ? "hide-item" : ""}`}
            onClick={() => handlePagePrevious()}
          >
            <span className='page-link'>
              <i className='fas fa-angle-left' />
            </span>
          </li>

          {renderPageNumber(totalPageNumber, _page, handlePageChange)}

          <li
            className={`page-item cursor ${_page >= totalPageNumber ? "hide-item" : ""}`}
            onClick={() => handlePageNext()}
          >
            <span className='page-link'>
              <i className='fas fa-angle-right' />
            </span>
          </li>

          <li
            className={`page-item cursor ${_page >= totalPageNumber ? "hide-item" : ""}`}
            onClick={() => handlePageChange(totalPageNumber)}
          >
            <span className='page-link'>
              <i className='fas fa-angle-right' />
              <i className='fas fa-angle-right' />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

const renderPageNumber = (total, _page, handlePageChange) => {
  return Array.from(new Array(total)).map((item, index) => (
    <li
      className={`page-item cursor ${_page === index + 1 ? "active" : ""}`}
      key={index}
      onClick={() => {
        handlePageChange(index + 1);
      }}
    >
      <span className='page-link'>{index + 1}</span>
    </li>
  ));
};

export default Pagination;
