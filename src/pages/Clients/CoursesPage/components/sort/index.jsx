import React from "react";
import PropTypes from "prop-types";

Sort.propTypes = {};

function Sort(props) {
  return (
    <div className='search-box d-flex flex-row'>
      <p>Sort by : </p>
      <select className='form-control styleSelect'>
        <option>All Categories</option>
        <option value={1}>Wordpress</option>
        <option value={2}>HTML</option>
        <option value={3}>Javascript</option>
        <option value={3}>Photoshop</option>
      </select>
    </div>
  );
}

export default Sort;
