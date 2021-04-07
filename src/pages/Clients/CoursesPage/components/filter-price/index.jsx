import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { priceLow, priceHigh } from "constant/filter";
import { useLocation } from "react-router";
import queryString from "query-string";

FilterPrice.propTypes = {
  onPriceLowChange: PropTypes.func,
  onPriceHighChange: PropTypes.func,
};
FilterPrice.defaultProps = {
  onPriceLowChange: null,
  onPriceHighChange: null,
};

function FilterPrice(props) {
  const { onPriceLowChange, onPriceHighChange } = props;

  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  const [activePriceLow, setActivePriceLow] = useState(() => {
    const findItem = findItemActivePriceLow(queryParams, priceLow);
    if (findItem[0]) return findItem[0].value;

    return 0;
  });
  const [activePriceHigh, setActivePriceHigh] = useState(() => {
    const findItem = findItemActivePriceHigh(queryParams, priceHigh);
    if (findItem[0]) return findItem[0].value;

    return 1500;
  });

  const handlePriceLowChange = (e) => {
    const { value } = e.target;
    const newValue = parseInt(value);
    if (onPriceLowChange) onPriceLowChange(newValue);
  };

  const handlePriceHighChange = (e) => {
    const { value } = e.target;
    const newValue = parseInt(value);
    if (onPriceHighChange) onPriceHighChange(newValue);
  };

  useEffect(() => {
    if (queryParams.price_gte) {
      const price = parseInt(queryParams.price_gte);
      setActivePriceLow(price);
    }
    if (queryParams.price_lte) {
      const price = parseInt(queryParams.price_lte);
      console.log(price);
      setActivePriceHigh(price);
    }
  }, [queryParams.price_gte, queryParams.price_lte]);

  return (
    <div className='card'>
      <div className='card-header' id='headingThree'>
        <a
          href='#/'
          className='icon-right'
          data-toggle='collapse'
          data-target='#collapseThree'
          aria-expanded='true'
          aria-controls='collapseThree'
        >
          <h3>Price</h3>
        </a>
      </div>
      <div
        id='collapseThree'
        className='collapse show'
        aria-labelledby='headingThree'
        data-parent='#accordion'
      >
        <div className='card-body'>
          <div className='price-filter mx-2'>
            <div className='single-select d-flex flex-row'>
              <div className='form-group '>
                <select
                  className='form-control'
                  value={activePriceLow}
                  onChange={handlePriceLowChange}
                >
                  {priceLow.map((item) => (
                    <option value={item.value} key={item.id}>
                      $ {item.value}
                    </option>
                  ))}
                </select>
              </div>
              <p>-</p>
              <div className='form-group'>
                <select
                  className='form-control'
                  value={activePriceHigh}
                  onChange={handlePriceHighChange}
                >
                  {priceHigh.map((item) => (
                    <option value={item.value} key={item.id}>
                      $ {item.value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const findItemActivePriceLow = (queryParams, arrPrice) => {
  queryParams.price_gte = parseInt(queryParams.price_gte);
  const findItem = arrPrice.filter((item) => item.value === queryParams.price_gte);
  return findItem;
};

const findItemActivePriceHigh = (queryParams, arrPrice) => {
  queryParams.price_lte = parseInt(queryParams.price_lte);
  const findItem = arrPrice.filter((item) => item.value === queryParams.price_lte);
  return findItem;
};

export default FilterPrice;
