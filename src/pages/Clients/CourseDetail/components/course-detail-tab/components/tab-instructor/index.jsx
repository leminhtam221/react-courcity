import React from "react";
import PropTypes from "prop-types";

TabInstructor.propTypes = {
  teacher: PropTypes.object,
};
TabInstructor.defaultProps = {
  teacher: {},
};

function TabInstructor(props) {
  const { teacher } = props;
  return (
    <div
      className='tab-pane fade'
      id='instructor'
      role='tabpanel'
      aria-labelledby='instructor-tab'
    >
      <div className='blog-author instructor-profile'>
        <div className='media'>
          <img src={teacher.avatar} alt='Generic placeholder' />
          <div className='media-body'>
            <h5>{teacher.name}</h5>
            <p>
              He attended and graduated from medical school in 1976, having over 42 years
              of diverse experience, especially in Cardiovascular Disease (Cardiology).
            </p>
            <div className='social-link'>
              <ul>
                <li className='facebook'>
                  <a href='#/'>
                    {" "}
                    <i className='fab fa-facebook-f' />{" "}
                  </a>
                </li>
                <li className='pinterest'>
                  <a href='#/'>
                    {" "}
                    <i className='fab fa-pinterest' />{" "}
                  </a>
                </li>
                <li className='instagram'>
                  <a href='#/'>
                    {" "}
                    <i className='fab fa-instagram' />{" "}
                  </a>
                </li>
                <li className='twitter'>
                  <a href='#/'>
                    {" "}
                    <i className='fab fa-twitter' />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabInstructor;
