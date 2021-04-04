import React from "react";
import PropTypes from "prop-types";

NavTab.propTypes = {};

function NavTab(props) {
  return (
    <div className='course-tab'>
      <p>All prices are in USD</p>
      <ul className='nav nav-tabs' id='myTab' role='tablist'>
        <li className='nav-item'>
          <a
            className='nav-link active'
            id='profile-tab'
            data-toggle='tab'
            href='#profile'
            role='tab'
            aria-controls='profile'
            aria-selected='false'
          >
            <i className='fas fa-th' />
          </a>
        </li>

        <li className='nav-item'>
          <a
            className='nav-link'
            id='home-tab'
            data-toggle='tab'
            href='#home'
            role='tab'
            aria-controls='home'
            aria-selected='true'
          >
            <i className='fas fa-list' />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTab;
