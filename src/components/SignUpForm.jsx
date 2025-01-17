import React from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import "./SignUpForm.css";

const SignUpForm = () => {

  return (
    <Formik
      initialValues= {{
        username:"",
        firstName:"",
        lastName:"",
        email:""
      }}
      onSubmit = {(values) => {
        //? http request
        console.log(values);
      }}
      validationSchema = {Yup.object({
        username: Yup.string()
                    .max(15, "Must be 15 characters or less")
                    .required("Username is required"),
        firstName: Yup.string()
                    .required("First name is required"),
        lastName: Yup.string()
                    .required("last name is required"),
        email: Yup.string()
                  .email("Enter a valid email")
                  .required()
      })}
    >
      <div className="form-container">
        <h1 className="form-heading">Sign Up</h1>
        <p className="form-description">
          Join our community to stay updated with the latest trends.
        </p>
        <Form>
          <div className="form-field">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <Field
              name="username"
              type="text" 
              className="form-input"
            />
            <ErrorMessage name="username" component="div" className="form-error"/>
          </div>

          <div className="form-field">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <Field
              name="firstName"
              type="text" 
              className="form-input"
            />
            <ErrorMessage name="firstName" component="div" className="form-error"/>
          </div>

          <div className="form-field">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <Field
              name="lastName"
              type="text" 
              className="form-input"
            />
            <ErrorMessage name="lastName" component="div" className="form-error"/>
          </div>

          <div className="form-field">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <Field
              name="email"
              type="email" 
              className="form-input"
            />
            <ErrorMessage name="email" component="div" className="form-error"/>
          </div>

          <button type="submit" className="form-button">
            Submit
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default SignUpForm;