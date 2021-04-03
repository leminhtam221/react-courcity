import React from "react";

function Category() {
  return (
    <div className='course-category-1x'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='category-left left-image'>
              <div className='hvrbox'>
                <img
                  src='assets/images/1.jpg'
                  alt='slide 1'
                  className='hvrbox-layer_bottom'
                />
                <div className='hvrbox-layer_top'>
                  <div className='hvrbox-text'>
                    <a href='#/'>Design Introduction</a>
                    <h5>800 Course</h5>
                    <a href='#/' className='btn-small'>
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='category-left right-image'>
                  <div className='hvrbox'>
                    <img
                      src='assets/images/5.jpg'
                      alt='slide 1'
                      className='hvrbox-layer_bottom'
                    />
                    <div className='hvrbox-layer_top hvrbox-text'>
                      <div className='hvrbox-text'>
                        <a href='#/'>Web Developement</a>
                        <h5>700 Course</h5>
                        <a href='#/' className='btn-small'>
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='category-left right-image'>
                  <div className='hvrbox'>
                    <img
                      src='assets/images/2.jpg'
                      alt='slide 1'
                      className='hvrbox-layer_bottom'
                    />
                    <div className='hvrbox-layer_top hvrbox-text'>
                      <div className='hvrbox-text'>
                        <a href='#/'>Digital Marketing</a>
                        <h5>350 Course</h5>
                        <a href='#/' className='btn-small'>
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='category-left right-image'>
                  <div className='hvrbox'>
                    <img
                      src='assets/images/3.jpg'
                      alt='slide 1'
                      className='hvrbox-layer_bottom'
                    />
                    <div className='hvrbox-layer_top hvrbox-text'>
                      <div className='hvrbox-text'>
                        <a href='#/'>Busines</a>
                        <h5>250 Course</h5>
                        <a href='#/' className='btn-small'>
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='category-left right-image'>
                  <div className='hvrbox'>
                    <img
                      src='assets/images/4.jpg'
                      alt='slide 1'
                      className='hvrbox-layer_bottom'
                    />
                    <div className='hvrbox-layer_top hvrbox-text'>
                      <div className='hvrbox-text'>
                        <a href='#/'>Photography</a>
                        <h5>180 Course</h5>
                        <a href='#/' className='btn-small'>
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='category-feature'>
            <div className='col-md-12'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='single-feature'>
                    <img src='assets/images/man-2.png' alt='slide 1' />
                    <h4>Expert Instructors</h4>
                    <p>
                      We rigorously screen and train our instructors ensure that they meet{" "}
                    </p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='single-feature'>
                    <img src='assets/images/clock.png' alt='slide 1' />
                    <h4>Lifetime Access</h4>
                    <p>
                      We rigorously screen and train our instructors ensure that they meet{" "}
                    </p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='single-feature'>
                    <img src='assets/images/pc.png' alt='slide 1' />
                    <h4>Learn Anywhere</h4>
                    <p>
                      We rigorously screen and train our instructors ensure that they meet{" "}
                    </p>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='single-feature'>
                    <a href='#/' className='btn-small'>
                      Get Started For Free
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
