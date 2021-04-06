import React, { useState } from "react";
import PropTypes from "prop-types";
import { sort } from "constant/filter";
import { useLocation } from "react-router";
import queryString from "query-string";

Sort.propTypes = {
  onSortChange: PropTypes.func,
};
Sort.defaultProps = {
  onSortChange: null,
};

function Sort(props) {
  const { onSortChange } = props;
  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  const findItem = sort.filter(
    (item) => item.sort === queryParams._sort && item.order === queryParams._order
  );
  const [active, setActive] = useState(() => {
    if (findItem[0]) return findItem[0].id;
    return 1;
  });

  const handleSortChange = (e) => {
    const { value } = e.target;
    const id = parseInt(value);
    const objSort = sort.filter((item) => item.id === id);
    if (onSortChange) onSortChange(objSort[0]);
    setActive(id);
  };

  return (
    <div className='search-box d-flex flex-row'>
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

export default Sort;
