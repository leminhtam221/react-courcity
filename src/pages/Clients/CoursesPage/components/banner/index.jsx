import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

Banner.propTypes = {
  onSearchChange: PropTypes.func,
};
Banner.defaultProps = {
  onSearchChange: null,
};

function Banner(props) {
  const { onSearchChange } = props;
  const [search, setSearch] = useState("");
  const typingTimeoutRef = useRef(null);
  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      onSearchChange(value);
    }, 500);
  };
  const handleSubmitSearch = () => {
    if (search === "") return;
    onSearchChange(search);
  };
  return (
    <div className='main-banner course-list-banner'>
      <div className='hvrbox'>
        <img
          src='assets/images/banner-1.png'
          alt='Mountains'
          className='hvrbox-layer_bottom'
        />
        <div className='hvrbox-layer_top'>
          <div className='container'>
            <div className='overlay-text text-center'>
              <h3>
                <b>2,579</b> Online Course &amp; Video Tutorials!
              </h3>
              <div className='col-md-8 offset-md-2'>
                <div className='input-group'>
                  <input
                    type='text'
                    className='form-control'
                    aria-label='Text input with dropdown button'
                    placeholder='Enter Your Search Here'
                    name='search'
                    value={search}
                    onChange={handleChange}
                    autoComplete='off'
                  />
                  <div className='input-group-append'>
                    <button
                      className='btn btn-search'
                      type='button'
                      onClick={handleSubmitSearch}
                    >
                      <i className='fas fa-search' />
                    </button>
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

export default Banner;
