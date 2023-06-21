/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  FieldProps,
  FormikHelpers,
} from 'formik';
import * as Yup from 'yup';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import './signUp.scss';
import { Button } from '../../../controls/Button/Button';

interface FormValues {
  fullName: string;
  email: string;
  password: string;
  confirm_password: string;
}

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const PasswordInput: React.FC<FieldProps> = ({ field, form, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="password-input-container">
      <input type={showPassword ? 'text' : 'password'} {...field} {...props} />
      <span className="password-toggle" onClick={togglePasswordVisibility}>
        {showPassword ? <EyeInvisibleOutlined rev={undefined} /> : <EyeOutlined rev={undefined} />}
      </span>
    </div>
  );
};

export const SignUp: React.FC = () => {
  const handleSubmit = (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>,
  ) => {
    // Logic for form submission
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

            <Button classes="signIN-button" text="SIGN UP" />

          </Form>
        </Formik>
      </div>
    </>
  );
};
