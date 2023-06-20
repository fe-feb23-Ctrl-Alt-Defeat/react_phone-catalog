/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import './signUp.scss';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  // confirm_password: Yup.string()
  //   .oneOf([Yup.ref('password'), null], 'Passwords must match')
  //   .required('Confirm Password is required'),
});

const PasswordInput = ({ field, form, ...props }: any) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="password-input-container">
      <input
        type={showPassword ? 'text' : 'password'}
        {...field}
        {...props}
      />
      <span
        className="password-toggle"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <EyeInvisibleOutlined rev={undefined} />
        ) : (
          <EyeOutlined rev={undefined} />
        )}
      </span>
    </div>
  );
};

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
              className="error-message error-border"
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
              className="error-message error-border"
            />

            <Field
              name="password"
              placeholder="Password"
              component={PasswordInput}
              className="contacts__field form-field"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message error-border"
            />

            {/* <Field
              name="confirm_password"
              type="password"
              placeholder="Confirm Password"
              className="contacts__field form-field"
            />
            <ErrorMessage
              name="confirm_password"
              component="div"
              className="error-message error-border"
            /> */}

            <button className="signIN-button" type="submit">
              SIGN UP
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
