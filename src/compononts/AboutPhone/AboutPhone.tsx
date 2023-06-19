import React, { Fragment } from 'react';
import { Phone } from '../../types/CardDescription';
import { AboutPhoneItem } from '../AboutPhoneItem';

interface Props {
  phone: Phone
}

export const AboutPhone: React.FC<Props> = ({ phone }) => {
  return (
    <>
      {phone?.description.map(descr => (
        <Fragment key={descr.title}>
          <AboutPhoneItem descr={descr} />
        </Fragment>
      ))}
    </>
  );
};
