/* eslint-disable no-console */
import React from 'react';
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const SignUp = () => {
  const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    // Логику отправки формы
    console.log(values);

    resetForm();
    setSubmitting(false);
  };

  return (
    <>
      <div className="form__container">
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            password: '',
            confirm_password: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          <Form className="signIN-form">
            <Field
              name="fullName"
              type="text"
              placeholder="Full Name"
              className="contacts__field form-field"
            />
            <ErrorMessage
              name="fullName"
              component="div"
              className="error-message"
            />

            <Field
              name="email"
              type="email"
              placeholder="E-mail"
              className="contacts__field form-field"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />

            <Field
              name="password"
              type="password"
              placeholder="Password"
              className="contacts__field form-field"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />

            <Field
              name="confirm_password"
              type="password"
              placeholder="Confirm Password"
              className="contacts__field form-field"
            />
            <ErrorMessage
              name="confirm_password"
              component="div"
              className="error-message"
            />

            <button className="signIN-button" type="submit">
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
