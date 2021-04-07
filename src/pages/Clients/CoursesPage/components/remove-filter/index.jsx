import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./remove-filter.css";
import PropTypes from "prop-types";

RemoveFilter.propTypes = {
  onClickRemoveFilter: PropTypes.func,
};
RemoveFilter.defaultProps = {
  onClickRemoveFilter: null,
};

function RemoveFilter(props) {
  const { onClickRemoveFilter } = props;

  const defaultFilter = {
    _sort: "id",
    _order: "desc",
    _expand: "teacher",
    _page: 1,
    _limit: 6,
    price_gte: 0,
    price_lte: 1500,
  };
  const location = useLocation();
  const [hiddenFilter, setHiddenFilter] = useState(true);
  const queryParams = queryString.parse(location.search);

  useEffect(() => {
    if (Object.keys(queryParams).length) {
      queryParams._page = parseInt(queryParams._page);
      queryParams._limit = parseInt(queryParams._limit);
      queryParams.price_gte = parseInt(queryParams.price_gte);
      queryParams.price_lte = parseInt(queryParams.price_lte);

      if (Object.keys(queryParams).length !== Object.keys(defaultFilter).length) {
        setHiddenFilter(false);
      } else {
        let check = false;
        for (const key in defaultFilter) {
          if (defaultFilter[key] !== queryParams[key]) {
            check = true;
            break;
          }
        }
        if (check) setHiddenFilter(false);
        else setHiddenFilter(true);
      }
    }
  }, [queryParams]);

  const handleCLickRemoveFilter = () => {
    if (!onClickRemoveFilter) return;
    onClickRemoveFilter(defaultFilter);
  };

  return (
    <div className='course-header-left-top'>
      <p
        className={`${hiddenFilter ? "hidden-filter" : ""} cursor`}
        onClick={handleCLickRemoveFilter}
      >
        <img src='assets/images/cross.png' alt='remove filter' /> Remove Filter
      </p>
    </div>
  );
}

export default RemoveFilter;
