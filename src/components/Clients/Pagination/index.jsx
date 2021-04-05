import React from "react";
import "./pagination.css";
import { useDispatch, useSelector } from "react-redux";
import { onPageChange, onPagePrevious, onPageNext } from "redux/paginationSlice";

function Pagination() {
  const pagination = useSelector((state) => state.pagination);
  const { _limit, _page, total } = pagination;
  const dispatch = useDispatch();

  const total_pageNumber = Math.ceil(total / _limit);
  const handlePagePrevious = () => {
    if (_page <= 1) return;
    const action = onPagePrevious();
    dispatch(action);
  };
  const handlePageNext = () => {
    if (_page >= total_pageNumber) return;
    const action = onPageNext();
    dispatch(action);
  };
  const handlePageChange = (pageNumber) => {
    const action = onPageChange(pageNumber);
    dispatch(action);
  };

  return (
    <div className='col-md-12'>
      <div className='course-pagination'>
        <ul className='pagination'>
          <li
            className={`page-item cursor ${_page <= 1 ? "disabled" : ""}`}
            onClick={() => handlePagePrevious()}
          >
            <span className='page-link'>
              <i className='fas fa-angle-left' />
            </span>
          </li>

          {render_pageNumber(total_pageNumber, _page, handlePageChange)}

          <li
            className={`page-item cursor ${_page >= total_pageNumber ? "disabled" : ""}`}
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

const render_pageNumber = (total, _page, handlePageChange) => {
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
