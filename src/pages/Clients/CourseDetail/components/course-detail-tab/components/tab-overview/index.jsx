import React from "react";
import PropTypes from "prop-types";

TabOverView.propTypes = {
  course: PropTypes.object,
};
TabOverView.defaultProps = {
  course: {},
};

function TabOverView(props) {
  const { course } = props;
  return (
    <div
      className='tab-pane fade show active'
      id='overview'
      role='tabpanel'
      aria-labelledby='overview-tab'
    >
      <div className='learning-system'>
        <h4>What Will I Learn?</h4>
        <p>
          Learn cutting-edge deep reinforcement learning algorithms—from Deep Q-Networks
          (DQN) to Deep Deterministic Policy Gradients (DDPG). Apply these concepts to
          train agents to walk, drive, or perform other complex tasks.
        </p>
      </div>
      <div className='description'>
        <h4>Description</h4>
        <p>{course.description}</p>
      </div>
      <div className='price'>
        <h5>
          <span>${course.price}</span>
        </h5>
        <a href='#/' className='btn-small'>
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default TabOverView;
