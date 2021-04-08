import React from "react";
// import PropTypes from 'prop-types';

CourseDetailTab.propTypes = {};

function CourseDetailTab(props) {
  return (
    <div className='tab-content course-menu-tab' id='myTabContent'>
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
          <ul>
            <li>
              <div className='single-way'>
                <h4>Visual learning tips</h4>
                <p>
                  Graphic designers create visual concepts that inspire, and transform.
                  Learn how to use industry-leading software to build innovative.
                </p>
              </div>
            </li>
            <li>
              <div className='single-way'>
                <h4>How improve visual design</h4>
                <p>
                  Remember skills can be developed with practice. Design crash course
                  through interactive tutorials. Follow design and read design books.
                  Start using tools like Canva and pair it with SocialPilot.{" "}
                </p>
              </div>
            </li>
            <li>
              <div className='single-way'>
                <h4>Value of visual design</h4>
                <p>
                  Graphic design is process of visual communication problem solving using
                  one or more of typography, photography and illustration. The field is
                  considered a subset of visual.
                </p>
              </div>
            </li>
            <li>
              <div className='single-way'>
                <h4>Difference Between Visual Design and Graphic Design</h4>
                <p>
                  User interface (UI) designers are responsible for the “look and feel” of
                  a website, app, or other product. In other words, they're the ones who
                  add colors, pair typefaces, and set layouts.{" "}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className='requirements'>
          <h4>Requirements</h4>
          <ul>
            <li>
              <i className='fas fa-check' /> Understand what visual learning is for and
              how it is used.
            </li>
            <li>
              <i className='fas fa-check' /> Need knowledge of photoshop and basic
              knowledge of indesign.
            </li>
            <li>
              <i className='fas fa-check' /> Preferable to have experience with PS,
              Sketch, Indesign and Adobe XD.
            </li>
            <li>
              <i className='fas fa-check' /> Preferable to understand word embeddings.
            </li>
          </ul>
        </div>
        <div className='description'>
          <h4>Description</h4>
          <p>
            Your ability to use type is one of the things that differentiates graphic
            design from other visual professions. A big part of graphic design is
            understanding typography, developing your knowledge of typefaces, and how to
            apply them in your design. This will be a constant study throughout your
            career.
          </p>
        </div>
        <div className='price'>
          <h5>
            <del>$169</del>
            <span>$139</span>
          </h5>
          <a href='#/' className='btn-small'>
            Buy Now
          </a>
        </div>
      </div>
      <div
        className='tab-pane fade'
        id='curriculum'
        role='tabpanel'
        aria-labelledby='curriculum-tab'
      >
        <div className='learning-system'>
          <h4>What Will I Learn?</h4>
          <p>
            Learn cutting-edge deep reinforcement learning algorithms—from Deep Q-Networks
            (DQN) to Deep Deterministic Policy Gradients (DDPG). Apply these concepts to
            train agents to walk, drive, or perform other complex tasks.
          </p>
          <ul>
            <li>
              <div className='single-way'>
                <h4>Visual learning tips</h4>
                <p>
                  Graphic designers create visual concepts that inspire, and transform.
                  Learn how to use industry-leading software to build innovative.
                </p>
              </div>
            </li>
            <li>
              <div className='single-way'>
                <h4>How improve visual design</h4>
                <p>
                  Remember skills can be developed with practice. Design crash course
                  through interactive tutorials. Follow design and read design books.
                  Start using tools like Canva and pair it with SocialPilot.{" "}
                </p>
              </div>
            </li>
            <li>
              <div className='single-way'>
                <h4>Value of visual design</h4>
                <p>
                  Graphic design is process of visual communication problem solving using
                  one or more of typography, photography and illustration. The field is
                  considered a subset of visual.
                </p>
              </div>
            </li>
            <li>
              <div className='single-way'>
                <h4>Difference Between Visual Design and Graphic Design</h4>
                <p>
                  User interface (UI) designers are responsible for the “look and feel” of
                  a website, app, or other product. In other words, they're the ones who
                  add colors, pair typefaces, and set layouts.{" "}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className='requirements'>
          <h4>Requirements</h4>
          <ul>
            <li>
              <i className='fas fa-check' /> Understand what visual learning is for and
              how it is used.
            </li>
            <li>
              <i className='fas fa-check' /> Need knowledge of photoshop and basic
              knowledge of indesign.
            </li>
            <li>
              <i className='fas fa-check' /> Preferable to have experience with PS,
              Sketch, Indesign and Adobe XD.
            </li>
            <li>
              <i className='fas fa-check' /> Preferable to understand word embeddings.
            </li>
          </ul>
        </div>
        <div className='description'>
          <h4>Description</h4>
          <p>
            Your ability to use type is one of the things that differentiates graphic
            design from other visual professions. A big part of graphic design is
            understanding typography, developing your knowledge of typefaces, and how to
            apply them in your design. This will be a constant study throughout your
            career.
          </p>
        </div>
      </div>
      <div
        className='tab-pane fade'
        id='instructor'
        role='tabpanel'
        aria-labelledby='instructor-tab'
      >
        <div className='blog-author instructor-profile'>
          <div className='media'>
            <img src='assets/images/speaker-1.png' alt='Generic placeholder' />
            <div className='media-body'>
              <h5>Dr. Stavens Madison</h5>
              <p>
                He attended and graduated from medical school in 1976, having over 42
                years of diverse experience, especially in Cardiovascular Disease
                (Cardiology).
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
    </div>
  );
}

export default CourseDetailTab;
