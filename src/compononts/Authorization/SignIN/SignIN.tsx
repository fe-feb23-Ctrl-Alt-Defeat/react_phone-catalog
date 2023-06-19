/* eslint-disable no-console */
import React from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import './signIN.scss';

export const SignIN = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup
      .string().email('Invalid email').required('Email field is required'),
    password: Yup.string().required('Password field is required'),
  });

  const handleSubmit = (values: any, { resetForm }: any) => {
    // Логику отправки формы
    console.log('Отправка формы', values);

    resetForm();
  };

  return (
    <>
      <div className="form__container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="signIN-form">
            <Field
              name="email"
              type="email"
              placeholder="email"
              className="contacts__field form-field"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="field-error-message"
            />

            <Field
              name="password"
              type="password"
              placeholder="password"
              className="contacts__field form-field"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="field-error-message"
            />

            <button className="signIN-button" type="submit">
              Sign IN
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
