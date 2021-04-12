import React, { useState } from "react";
import PropTypes from "prop-types";
import FormGroup from "../form-group";
import { Formik, Form, FastField, Field } from "formik";
import * as yup from "yup";
import SelectOption from "../form-group/select-option";

FormAddEdit.propTypes = {
  onSubmit: PropTypes.func,
  category: PropTypes.array,
};
FormAddEdit.defaultProps = {
  onSubmit: null,
  category: [],
};

function FormAddEdit(props) {
  const { onSubmit, category } = props;
  const [file, setFile] = useState();

  const validate = yup.object().shape({
    course_name: yup
      .string()
      .required("Name is required")
      .min(10, "Name must be at least 10 characters"),

    price: yup
      .number("Price is number")
      .required("Price is required")
      .min(0, "Price min 0")
      .max(1500, "Price max 1500"),

    description: yup
      .string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters"),
  });

  const handleSubmit = (value) => {
    if (!onSubmit) return;
    let data = { ...value, file };
    data.category = Number.parseInt(data.category);
    onSubmit(data);
  };
  const handleInputImageChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <Formik
      initialValues={{
        course_name: "",
        price: "",
        description: "",
        categoryId: 1,
      }}
      validationSchema={validate}
      onSubmit={handleSubmit}
    >
      <Form>
        <FastField name='course_name' component={FormGroup} placeholder='Course name' />
        <FastField name='price' component={FormGroup} placeholder='Price' type='number' />
        <FastField name='description' component={FormGroup} placeholder='Description' />
        <Field
          name='categoryId'
          component={SelectOption}
          placeholder='Category'
          category={category}
        />

        <div>
          <label className='form-label' htmlFor='customFile'>
            Add image
          </label>
          <input
            type='file'
            className='form-control'
            id='customFile'
            onChange={handleInputImageChange}
          />
        </div>

        <button type='submit' className='btn btn-primary mt-3'>
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default FormAddEdit;
