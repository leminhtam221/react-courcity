import React from "react";
import PropTypes from "prop-types";
import CategoryLoading from "components/Clients/Loading/CategoryLoading";
import { Link } from "react-router-dom";

Category.propTypes = {
  categoryList: PropTypes.array,
  loading: PropTypes.bool,
};

Category.defaultProps = {
  categoryList: [],
  loading: true,
};

function Category(props) {
  const { categoryList, loading } = props;

  return (
    <div className='course-category-1x'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            {loading ? (
              <CategoryLoading className='left-image' />
            ) : (
              renderCategoryLeft(categoryList)
            )}
          </div>
          <div className='col-md-6'>
            <div className='row'>
              {loading ? renderCategoryLoading() : renderCategoryRight(categoryList)}
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

const renderCategoryLeft = (categoryList) => {
  if (categoryList.length <= 0) return;
  const category = categoryList[0];
  return (
    <div className='category-left left-image'>
      <div className='hvrbox'>
        <img
          src={category.category_image}
          alt='slide 1'
          className='hvrbox-layer_bottom'
        />
        <div className='hvrbox-layer_top'>
          <div className='hvrbox-text'>
            <Link to={`/courses?categoryId=${category.id}`}>
              {category.category_name}
            </Link>
            <Link to={`/courses?categoryId=${category.id}`} className='btn-small'>
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderCategoryLoading = () => {
  return Array.from(new Array(4)).map((item, index) => (
    <div className='col-md-6' key={index}>
      <CategoryLoading />
    </div>
  ));
};

const renderCategoryRight = (categoryList) => {
  if (categoryList.length <= 0) return;
  const listCategory = [];
  for (let i = 1; i <= 4; i++) {
    const html = (
      <div className='col-md-6' key={i}>
        <div className='category-left right-image'>
          <div className='hvrbox'>
            <img
              src={categoryList[i].category_image}
              alt='slide 1'
              className='hvrbox-layer_bottom'
            />
            <div className='hvrbox-layer_top hvrbox-text'>
              <div className='hvrbox-text'>
                <Link to={`/courses?categoryId=${categoryList[i].id}`}>
                  {categoryList[i].category_name}
                </Link>
                <Link
                  to={`/courses?categoryId=${categoryList[i].id}`}
                  className='btn-small'
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    listCategory.push(html);
  }
  return listCategory;
};

export default Category;
