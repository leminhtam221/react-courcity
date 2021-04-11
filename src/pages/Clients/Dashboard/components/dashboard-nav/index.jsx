import React from "react";

function DashBoardNav(props) {
  return (
    <ul className='nav nav-tabs ml-4' id='myTab' role='tablist'>
      <li className='nav-item'>
        <a
          className='nav-link active'
          id='home-tab'
          data-toggle='tab'
          href='#home'
          role='tab'
          aria-controls='home'
          aria-selected='true'
        >
          My course
        </a>
      </li>
      <li className='nav-item'>
        <a
          className='nav-link'
          id='profile-tab'
          data-toggle='tab'
          href='#profile'
          role='tab'
          aria-controls='profile'
          aria-selected='false'
        >
          Add course
        </a>
      </li>
      <li className='nav-item'>
        <a
          className='nav-link'
          id='contact-tab'
          data-toggle='tab'
          href='#contact'
          role='tab'
          aria-controls='contact'
          aria-selected='false'
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default DashBoardNav;
