import React, { useEffect, useState } from 'react';
import './phoneInfo.scss';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/products';
import { Phone } from '../../types/CardDescription';
import { PageRoute } from '../../controls/PageRoute/PageRoute';
import { MoveBack } from '../../controls/MoveBack/MoveBack';
import { Gallery } from '../../controls/Gallery/Gallery';

export const PhoneInfo = () => {
  const { itemId } = useParams();
  const [phone, setPhone] = useState<Phone | null>(null);

  const loadPhoneById = async () => {
    const phoneFromServer = await getProductById(itemId || '');

    setPhone(phoneFromServer);
  };

  useEffect(() => {
    loadPhoneById();
  }, []);

  return (
    <div className="info">
      <div className="container">
        <div className="info__path">
          <PageRoute phoneName={phone?.name} />
        </div>

        <div className="info__back">
          <MoveBack />
        </div>

        <div className="info__title">
          <h2 className="info__title-subtitle">{phone?.name}</h2>
        </div>

        <div className="info__content">
          <section className="info__content-description">
            <Gallery phone={phone} />
          </section>
          <section className="info__content-characteristics">
            characteristics
          </section>
        </div>
      </div>
    </div>
  );
};
