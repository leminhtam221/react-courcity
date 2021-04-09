import React from "react";

function TabReview(props) {
  return (
    <div
      className='tab-pane fade'
      id='review'
      role='tabpanel'
      aria-labelledby='review-tab'
    >
      <div className='review-bar'>
        <div className='progress mb-3'>
          <div
            className='progress-bar'
            role='progressbar'
            style={{ width: "25%" }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            25%
          </div>
        </div>
        <div className='progress mb-3'>
          <div
            className='progress-bar'
            role='progressbar'
            style={{ width: "50%" }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            50%
          </div>
        </div>
        <div className='progress mb-3'>
          <div
            className='progress-bar'
            role='progressbar'
            style={{ width: "75%" }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            75%
          </div>
        </div>
        <div className='progress mb-3'>
          <div
            className='progress-bar'
            role='progressbar'
            style={{ width: "80%" }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            80%
          </div>
        </div>
        <div className='progress mb-3'>
          <div
            className='progress-bar'
            role='progressbar'
            style={{ width: "45%" }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            45%
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabReview;
