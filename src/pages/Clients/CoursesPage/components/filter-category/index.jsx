import React from "react";
import PropTypes from "prop-types";

FilterCategory.propTypes = {};

function FilterCategory(props) {
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
              <li>
                <a href='#/'>
                  <img src='assets/images/arrow-right.png' alt='card' /> All Categories{" "}
                  <span>45</span>
                </a>
              </li>
              <li>
                <a href='#/'>
                  <img src='assets/images/arrow-right.png' alt='card' /> Wordpress{" "}
                  <span>30</span>
                </a>
              </li>
              <li>
                <a href='#/'>
                  <img src='assets/images/arrow-right.png' alt='card' /> Landing Page{" "}
                  <span>20</span>
                </a>
              </li>
              <li>
                <a href='#/'>
                  <img src='assets/images/arrow-right.png' alt='card' /> Photography{" "}
                  <span>15</span>
                </a>
              </li>
              <li>
                <a href='#/'>
                  <img src='assets/images/arrow-right.png' alt='card' /> Creative{" "}
                  <span>30</span>
                </a>
              </li>
              <li>
                <a href='#/'>
                  <img src='assets/images/arrow-right.png' alt='card' /> Portfolio{" "}
                  <span>20</span>
                </a>
              </li>
              <li>
                <a href='#/'>
                  <img src='assets/images/arrow-right.png' alt='card' /> PSD Template{" "}
                  <span>30</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterCategory;
