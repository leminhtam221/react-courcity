import React, { useState } from "react";
import PropTypes from "prop-types";
import "./filter.css";

FilterCategory.propTypes = {
  categoryList: PropTypes.array,
  onCategoryChange: PropTypes.func,
};
FilterCategory.defaultProps = {
  categoryList: [],
  onCategoryChange: null,
};

function FilterCategory(props) {
  const { categoryList, onCategoryChange } = props;
  const [active, setActive] = useState(0);

  const countTotalCourse = categoryList.reduce((total, item) => {
    return total + item.courses.length;
  }, 0);

  const handleClickCategory = (idCategory) => {
    setActive(idCategory);
    if (onCategoryChange) {
      onCategoryChange(idCategory);
    }
  };

  return (
    <div className='card'>
      <div className='card-header' id='headingOne'>
        <a
          href='#/'
          className='icon-right'
          data-toggle='collapse'
          data-target='#collapseOne'
          aria-expanded='true'
          aria-controls='collapseOne'
        >
          <h3>Category</h3>
        </a>
      </div>
      <div
        id='collapseOne'
        className='collapse show'
        aria-labelledby='headingOne'
        data-parent='#accordion'
      >
        <div className='card-body'>
          <div className='category'>
            <ul>
              <li
                className={`cursor ${active === 0 ? "active-item" : ""}`}
                onClick={() => {
                  handleClickCategory(0);
                }}
              >
                <div>
                  <img src='assets/images/arrow-right.png' alt='card' /> All Categories{" "}
                  <span>{countTotalCourse}</span>
                </div>
              </li>

              {renderCategory(categoryList, active, handleClickCategory)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const renderCategory = (categoryList, active, handleClickCategory) => {
  return categoryList.map((item) => (
    <li
      key={item.id}
      className={`cursor ${active === item.id ? "active-item" : ""}`}
      onClick={() => {
        handleClickCategory(item.id);
      }}
    >
      <div>
        <img src='assets/images/arrow-right.png' alt='card' /> {item.category_name}{" "}
        <span>{item.courses.length}</span>
      </div>
    </li>
  ));
};

export default FilterCategory;
