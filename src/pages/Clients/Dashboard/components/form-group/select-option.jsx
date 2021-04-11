import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";

SelectOption.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  placeholder: PropTypes.string,
  category: PropTypes.array,
};
SelectOption.defaultProps = {
  placeholder: "",
  type: "text",
  category: [],
};
function SelectOption(props) {
  const { placeholder, field, category } = props;

  return (
    <div className='form-group'>
      <label>{placeholder}</label>
      <select className='form-control' {...field}>
        {category.map((item) => (
          <option value={item.id} key={item.id}>
            {item.category_name}
          </option>
        ))}
      </select>

      <ErrorMessage name={field.name}>
        {(msg) => <div className='badge badge-danger mb-2'>{msg}</div>}
      </ErrorMessage>
    </div>
  );
}

export default SelectOption;
