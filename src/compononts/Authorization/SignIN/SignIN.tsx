/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useContext } from 'react';
import {
  Formik,
  Field,
  ErrorMessage,
  Form,
  FormikHelpers,
} from 'formik';
import * as Yup from 'yup';
import './signIN.scss';
import { FavoritesAndCartCountContext } from '../../FavoritesCartContext/FavoritesCartContext';
import { Button } from '../../../controls/Button/Button';

interface FormValues {
  email: string;
  password: string;
}

export const SignIN: React.FC = () => {
  const { setIsModalOpen } = useContext(FavoritesAndCartCountContext);
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email field is required'),
    password: Yup.string().required('Password field is required'),
  });

  const handleSubmit = (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    // Logic for form submission
    console.log('Form submission', values);
    setIsModalOpen(false);
    resetForm();
  };

  return (
    <>
      <div className="form__container">
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form className="signIN-form">
            <Field
              name="email"
              type="email"
              placeholder="E-mail"
              className="contacts__field form-field"
            />
            <ErrorMessage name="email" component="p" className="field-error-message error-border" />

            <Field
              name="password"
              type="password"
              placeholder="Password"
              className="contacts__field form-field"
            />
            <ErrorMessage name="password" component="p" className="field-error-message error-border" />

            <Button classes="signIN-button" text="SIGN IN" />
          </Form>
        </Formik>
      </div>
    </>
  );
};
