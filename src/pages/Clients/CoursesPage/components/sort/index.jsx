import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { sort } from "constant/filter";
import { useLocation } from "react-router";
import queryString from "query-string";

Sort.propTypes = {
  onSortChange: PropTypes.func,
  scroll: PropTypes.object,
};
Sort.defaultProps = {
  onSortChange: null,
  scroll: null,
};

function Sort(props) {
  const { onSortChange, scroll } = props;
  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  const [active, setActive] = useState(() => {
    const findItem = findItemActive(queryParams);
    if (findItem[0]) return findItem[0].id;
    return 1;
  });

  const handleSortChange = (e) => {
    const { value } = e.target;
    const id = parseInt(value);
    const objSort = sort.filter((item) => item.id === id);
    if (onSortChange) onSortChange(objSort[0]);
  };

  useEffect(() => {
    if (queryParams._order && queryParams._sort) {
      const sortParams = queryParams._sort;
      const orderParams = queryParams._order;
      const objSort = sort.filter(
        (item) => item.sort === sortParams && item.order === orderParams
      );
      setActive(objSort[0].id);
    }
  }, [queryParams._order, queryParams._sort]);

  return (
    <div className='search-box d-flex flex-row' ref={scroll}>
      <p>Sort by : </p>
      <select
        className='form-control styleSelect'
        onChange={handleSortChange}
        value={active}
      >
        {sort.map((item, index) => (
          <option value={item.id} key={index}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
}

const findItemActive = (queryParams) => {
  const findItem = sort.filter(
    (item) => item.sort === queryParams._sort && item.order === queryParams._order
  );
  return findItem;
};

export default Sort;
