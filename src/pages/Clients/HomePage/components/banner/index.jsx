import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./banner.css";
import coursesApi from "api/coursesApi";
import { useHistory } from "react-router";

Banner.propTypes = {
  categoryList: PropTypes.array,
};

Banner.defaultProps = {
  categoryList: [],
};

function Banner(props) {
  const [search, setSearch] = useState("");
  const [hideAutoText, setHideAutoText] = useState(true);
  const [listSearch, setListSearch] = useState([]);
  const typingTimeoutRef = useRef(null);
  const history = useHistory();

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value === "") {
      setHideAutoText(true);
      setListSearch([]);
    } else setHideAutoText(false);
  };
  useEffect(() => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    if (search !== "") {
      typingTimeoutRef.current = setTimeout(() => {
        const fetchListSearch = async () => {
          const searchData = await coursesApi.getAll({ q: search });
          setListSearch(searchData.data);
        };
        fetchListSearch();
      }, 500);
    }
    return () => {
      clearTimeout(typingTimeoutRef.current);
    };
  }, [search]);
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (search === "") return;
    history.push({
      pathname: "/courses",
      search: `q=${search}`,
    });
  };
  const handleAutoTextClick = (value) => {
    setSearch(value);
    setHideAutoText(true);
  };
  return (
    <div className='main-banner'>
      <div className='hvrbox'>
        <img
          src='assets/images/banner-1.png'
          alt='Mountains'
          className='hvrbox-layer_bottom'
        />
        <div className='hvrbox-layer_top'>
          <div className='container'>
            <div className='overlay-text text-center'>
              <h3>The Future Begins Here!</h3>
              <p>
                Working collaboratively to ensure every student achieves academically,
                <br /> socially, and emotionally.
              </p>
              <form>
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
                    <ul
                      className={`search-complete scroll-bar ${
                        hideAutoText ? "hide-item" : ""
                      }`}
                    >
                      {listSearch.map((item) => (
                        <li
                          className='search-complete-item'
                          key={item.id}
                          onClick={() => {
                            handleAutoTextClick(item.course_name);
                          }}
                        >
                          {item.course_name}
                        </li>
                      ))}
                    </ul>

                    <div className='input-group-append'>
                      <button
                        className={`btn btn-search ${
                          search === "" ? "disabled-button" : ""
                        }`}
                        type='submit'
                        onClick={handleSubmitSearch}
                      >
                        <img src='assets/images/search.png' alt='search' />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className='slider-feature'>
                <ul>
                  <li>
                    <img src='assets/images/book.png' alt='Mountains' /> 2502 Course
                  </li>
                  <li>
                    <img src='assets/images/cap.png' alt='Mountains' /> 32052 Students
                  </li>
                  <li>
                    <img src='assets/images/man.png' alt='Mountains' /> 459 Teachers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
