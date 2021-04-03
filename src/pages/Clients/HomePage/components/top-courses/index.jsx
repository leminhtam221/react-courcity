import React from "react";

function TopCourses() {
  return (
    <div className='course-1x'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='title-middle'>
              <h2>Coursecity Top Courses</h2>
            </div>
          </div>
          <div className='col-md-12'>
            <div id='filters' className='course-menu'>
              <button className='filter active' data-filter='all'>
                All Courses
              </button>
              <button className='filter' data-rel='web' data-filter='.web'>
                Websites
              </button>
              <button className='filter' data-rel='design' data-filter='.design'>
                Design
              </button>
              <button className='filter' data-rel='bcards' data-filter='.bcards'>
                Business
              </button>
              <button
                className='filter'
                data-rel='photography'
                data-filter='.photography'
              >
                Photography
              </button>
              <button className='filter' data-rel='marketing' data-filter='.marketing'>
                Marketing
              </button>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='all-course'>
              <div className='row'>
                <div className='col-md-3 tile web'>
                  <div className='single-course'>
                    <div className='hvrbox'>
                      <img
                        src='assets/images/1.jpg'
                        alt='slide 1'
                        className='hvrbox-layer_bottom'
                      />
                      <div className='hvrbox-layer_top hvrbox-text'>
                        <div className='hvrbox-text'>
                          <a
                            href='https://www.youtube.com/watch?v=gwinFP8_qIM'
                            className='btn-circle video'
                          >
                            <i className='fas fa-play' />
                          </a>
                          <a href='course-single.html'>Preview Course</a>
                        </div>
                      </div>
                    </div>
                    <div className='single-course-content'>
                      <a href='course-single.html'>
                        Learn Photoshop With Eyal Complete Course
                      </a>
                      <p>
                        Nir Eyal{" "}
                        <span>
                          <del>$169</del> <b>$149</b>
                        </span>
                      </p>
                      <h3>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' /> (4)
                        <span>Enroll: 128</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 tile design'>
                  <div className='single-course'>
                    <div className='hvrbox'>
                      <img
                        src='assets/images/2.jpg'
                        alt='slide 1'
                        className='hvrbox-layer_bottom'
                      />
                      <div className='hvrbox-layer_top hvrbox-text'>
                        <div className='hvrbox-text'>
                          <a
                            href='https://www.youtube.com/watch?v=gwinFP8_qIM'
                            className='btn-circle video'
                          >
                            <i className='fas fa-play' />
                          </a>
                          <a href='course-single.html'>Preview Course</a>
                        </div>
                      </div>
                    </div>
                    <div className='single-course-content'>
                      <a href='course-single.html'>Visual Basic Essential Training</a>
                      <p>
                        Nir Eyal{" "}
                        <span>
                          <del>$169</del> <b>$149</b>
                        </span>
                      </p>
                      <h3>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' /> (4)
                        <span>Enroll: 128</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 tile marketing'>
                  <div className='single-course'>
                    <div className='hvrbox'>
                      <img
                        src='assets/images/3.jpg'
                        alt='slide 1'
                        className='hvrbox-layer_bottom'
                      />
                      <div className='hvrbox-layer_top hvrbox-text'>
                        <div className='hvrbox-text'>
                          <a
                            href='https://www.youtube.com/watch?v=gwinFP8_qIM'
                            className='btn-circle video'
                          >
                            <i className='fas fa-play' />
                          </a>
                          <a href='course-single.html'>Preview Course</a>
                        </div>
                      </div>
                    </div>
                    <div className='single-course-content'>
                      <a href='course-single.html'>The Complete Developer Web Course</a>
                      <p>
                        Nir Eyal{" "}
                        <span>
                          <del>$169</del> <b>$149</b>
                        </span>
                      </p>
                      <h3>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' /> (4)
                        <span>Enroll: 128</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 tile design'>
                  <div className='single-course'>
                    <div className='hvrbox'>
                      <img
                        src='assets/images/4.jpg'
                        alt='slide 1'
                        className='hvrbox-layer_bottom'
                      />
                      <div className='hvrbox-layer_top hvrbox-text'>
                        <div className='hvrbox-text'>
                          <a
                            href='https://www.youtube.com/watch?v=gwinFP8_qIM'
                            className='btn-circle video'
                          >
                            <i className='fas fa-play' />
                          </a>
                          <a href='course-single.html'>Preview Course</a>
                        </div>
                      </div>
                    </div>
                    <div className='single-course-content'>
                      <a href='course-single.html'>Creating 3D environment in Blender</a>
                      <p>
                        Nir Eyal{" "}
                        <span>
                          <del>$169</del> <b>$149</b>
                        </span>
                      </p>
                      <h3>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' /> (4)
                        <span>Enroll: 128</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 tile marketing'>
                  <div className='single-course'>
                    <div className='hvrbox'>
                      <img
                        src='assets/images/5.jpg'
                        alt='slide 1'
                        className='hvrbox-layer_bottom'
                      />
                      <div className='hvrbox-layer_top hvrbox-text'>
                        <div className='hvrbox-text'>
                          <a
                            href='https://www.youtube.com/watch?v=gwinFP8_qIM'
                            className='btn-circle video'
                          >
                            <i className='fas fa-play' />
                          </a>
                          <a href='course-single.html'>Preview Course</a>
                        </div>
                      </div>
                    </div>
                    <div className='single-course-content'>
                      <a href='course-single.html'>Advanced CSS and Sass Flexbox Grid</a>
                      <p>
                        Nir Eyal{" "}
                        <span>
                          <del>$169</del> <b>$149</b>
                        </span>
                      </p>
                      <h3>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' /> (4)
                        <span>Enroll: 128</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 tile photography'>
                  <div className='single-course'>
                    <div className='hvrbox'>
                      <img
                        src='assets/images/6.jpg'
                        alt='slide 1'
                        className='hvrbox-layer_bottom'
                      />
                      <div className='hvrbox-layer_top hvrbox-text'>
                        <div className='hvrbox-text'>
                          <a
                            href='https://www.youtube.com/watch?v=gwinFP8_qIM'
                            className='btn-circle video'
                          >
                            <i className='fas fa-play' />
                          </a>
                          <a href='course-single.html'>Preview Course</a>
                        </div>
                      </div>
                    </div>
                    <div className='single-course-content'>
                      <a href='course-single.html'>
                        Complete Cyber Security Course Hackers
                      </a>
                      <p>
                        Nir Eyal{" "}
                        <span>
                          <del>$169</del> <b>$149</b>
                        </span>
                      </p>
                      <h3>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' /> (4)
                        <span>Enroll: 128</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 tile bcards'>
                  <div className='single-course'>
                    <div className='hvrbox'>
                      <img
                        src='assets/images/7.jpg'
                        alt='slide 1'
                        className='hvrbox-layer_bottom'
                      />
                      <div className='hvrbox-layer_top hvrbox-text'>
                        <div className='hvrbox-text'>
                          <a
                            href='https://www.youtube.com/watch?v=gwinFP8_qIM'
                            className='btn-circle video'
                          >
                            <i className='fas fa-play' />
                          </a>
                          <a href='course-single.html'>Preview Course</a>
                        </div>
                      </div>
                    </div>
                    <div className='single-course-content'>
                      <a href='course-single.html'>Introduction To Python Programming</a>
                      <p>
                        Nir Eyal{" "}
                        <span>
                          <del>$169</del> <b>$149</b>
                        </span>
                      </p>
                      <h3>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' /> (4)
                        <span>Enroll: 128</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 tile photography'>
                  <div className='single-course'>
                    <div className='hvrbox'>
                      <img
                        src='assets/images/8.jpg'
                        alt='slide 1'
                        className='hvrbox-layer_bottom'
                      />
                      <div className='hvrbox-layer_top hvrbox-text'>
                        <div className='hvrbox-text'>
                          <a
                            href='https://www.youtube.com/watch?v=gwinFP8_qIM'
                            className='btn-circle video'
                          >
                            <i className='fas fa-play' />
                          </a>
                          <a href='course-single.html'>Preview Course</a>
                        </div>
                      </div>
                    </div>
                    <div className='single-course-content'>
                      <a href='course-single.html'>
                        Certificate Early Education Leadership
                      </a>
                      <p>
                        Nir Eyal{" "}
                        <span>
                          <del>$169</del> <b>$149</b>
                        </span>
                      </p>
                      <h3>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' /> (4)
                        <span>Enroll: 128</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className='col-md-12 text-center'>
                  <a href='#/' className='btn-small'>
                    {" "}
                    View more{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCourses;
