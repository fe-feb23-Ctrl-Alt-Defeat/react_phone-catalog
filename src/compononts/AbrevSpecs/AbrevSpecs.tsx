import React, { Fragment } from 'react';
import { Phone } from '../../types/CardDescription';
import { AbrevSpecsItem } from '../AbrevSpecsItem/AbrevSpecsItem';

interface Props {
  phone: Phone;
}

export const AbrevSpecs: React.FC<Props> = ({ phone }) => {
  const abbreviatePhoneInfo = [
    { screen: phone?.screen || '' },
    { resolution: phone?.resolution || '' },
    { ram: phone?.ram || '' },
  ];

  return (
    <>
      {
        abbreviatePhoneInfo.map(info => {
          const [infoField, infoValue]: string[] = Object.entries(info)[0];

          return (
            <Fragment key={infoField}>
              <AbrevSpecsItem field={infoField} value={infoValue} />
            </Fragment>
          );
        })
      }
    </>
  );
};
