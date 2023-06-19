import React, { Fragment } from 'react';
import { FullPhoneInfo, Phone } from '../../types/CardDescription';
import { SpecificationItem } from '../SpecificationItem';

interface Props {
  phone: Phone;
}
export const Specifications: React.FC<Props> = ({ phone }) => {
  const fullPhoneInfo: FullPhoneInfo[] = [
    { Screen: phone?.screen || '' },
    { Resolution: phone?.resolution || '' },
    { Processor: phone?.processor || '' },
    { Ram: phone?.ram || '' },
    { 'Built in memory': phone?.capacity || '' },
    { Camera: phone?.camera || '' },
    { Zoom: phone?.zoom || '' },
    { Cell: phone?.cell || [] },
  ];

  return (
    <>
      {fullPhoneInfo.map(info => {
        const [infoField, infoValue] = Object.entries(info)[0];

        return (
          <Fragment key={`${infoField}${infoValue}`}>
            <SpecificationItem
              infoField={infoField}
              infoValue={infoValue}
            />
          </Fragment>
        );
      })}
    </>
  );
};
