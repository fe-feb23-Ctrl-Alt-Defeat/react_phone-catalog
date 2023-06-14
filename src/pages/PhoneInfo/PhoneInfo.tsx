/* eslint-disable max-len */
import React, {
  useEffect,
  useState,
  Fragment,
} from 'react';
import cn from 'classnames';

import './phoneInfo.scss';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/products';
import { Phone } from '../../types/CardDescription';
import { PageRoute } from '../../controls/PageRoute/PageRoute';
import { MoveBack } from '../../controls/MoveBack/MoveBack';
import { Gallery } from '../../compononts/Gallery/Gallery';
import { Loader } from '../../compononts/Loader/Loader';
import { Button } from '../../controls/Button/Button';
import { DescriptionTitle } from '../../compononts/DescriptionTitle/DescriptionTitle';

export const PhoneInfo = () => {
  const { itemId } = useParams();
  const [phone, setPhone] = useState<Phone | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const [phoneCapacity, setPhoneCapacity] = useState<string>('');

  const loadPhoneById = async () => {
    setIsLoading(true);
    const phoneFromServer = await getProductById(itemId || '');

    setIsLoading(false);
    if (phoneFromServer !== null) {
      setPhone(phoneFromServer);
    }
  };

  // const hanleSetCapacity = (capacity: string) => {
  //   setPhoneCapacity(capacity);
  // };

  useEffect(() => {
    loadPhoneById();
  }, []);

  return (
    <>
      {isLoading
        ? <Loader />
        : (
          <div className="info">
            <div className="container">

              <div className="info__path">
                <PageRoute phoneName={phone?.name} text="Phones" />
              </div>

              <div className="info__back">
                <MoveBack />
              </div>

              <div className="info__title">
                <h2 className="info__title-subtitle">{phone?.name}</h2>
              </div>

              <div className="info__content">
                <section className="info__content-description">
                  <div className="info__content-description-gallery">
                    {phone?.images && <Gallery images={phone.images} />}
                  </div>
                  <div className="info__content-description-title">
                    <DescriptionTitle title="About" />
                  </div>
                  {phone?.description.map(descr => (
                    <article className="article" key={descr.title}>
                      <h4 className="article__title">{descr.title}</h4>
                      <p className="artilce__text">
                        {descr.text.length === 1 ? descr.text[0] : (
                          <>
                            {descr.text[0]}
                            <br />
                            <br />
                            {descr.text[1]}
                          </>
                        )}

                      </p>
                    </article>
                  ))}
                </section>

                <section className="info__content-characteristics">
                  <div className="grid-container">
                    <div className="available-colors">
                      <p className="available-colors__text">Available colors</p>
                      <p className="available-colors__id">ID: 802390</p>
                    </div>

                    <div className="color-selects">
                      <div className="color-selects__colors">

                        {phone?.colorsAvailable.map(color => (
                          <div key={color} className="color-selects__colors-item">
                            <div
                              className="color-selects__colors-item-color"
                              style={{ backgroundColor: color }}
                            />
                          </div>
                        ))}

                      </div>
                    </div>

                    <div className="under-line" />

                    <div className="select-capacity">
                      <p className="select-capacity__text">Select capacity</p>
                    </div>

                    <div className="capacityes">
                      {phone?.capacityAvailable.map(capacity => (
                        <Fragment key={capacity}>
                          <Button
                            text={capacity}
                            // classes="button-capacity"
                            classes={cn('button-capacity', { 'button-capacity--selected': itemId?.includes(capacity.toLowerCase()) })}
                          // onClick={hanleSetCapacity}
                          />
                        </Fragment>
                      ))}

                    </div>

                    <div className="under-line" />

                    <div className="price">
                      <div className="card__price">
                        <div className="card__price_normal">
                          {`${phone?.priceDiscount}$`}
                        </div>
                        <div className="card__price_discount">
                          {`${phone?.priceRegular}$`}
                        </div>
                      </div>
                    </div>

                    <div className="buttons-block">
                      <Button
                        text="Add to cart"
                        classes="button-add-to-cart"
                      />

                      <Button classes="button-favorite" />
                    </div>

                    <div className="characterisriics-block">
                      <div className="characterisriics-block__small-info">
                        <p className="characterisriics-block__small-info-text">Screen</p>
                        <p className="characterisriics-block__small-info-info">6.5” OLED</p>
                      </div>
                      <div className="characterisriics-block__resolution">
                        <p className="characterisriics-block__small-info-text">Resolution</p>
                        <p className="characterisriics-block__small-info-info">2688x1242</p>
                      </div>
                      <div className="characterisriics-block__processor">
                        <p className="characterisriics-block__small-info-text">Processor</p>
                        <p className="characterisriics-block__small-info-info">Apple A12 Bionic</p>
                      </div>
                      <div className="characterisriics-block__ram">
                        <p className="characterisriics-block__small-info-text">RAM</p>
                        <p className="characterisriics-block__small-info-info">3 GB</p>
                      </div>
                    </div>
                  </div>

                  <div className="tech-specs">
                    <div className="tech-specs__title">
                      <DescriptionTitle title="Tech specs" />
                    </div>
                    <div className="tech-specs__details">
                      <div className="tech-specs__details-detail">
                        <p className="tech-specs__details-detail-key">Screen</p>
                        <p className="tech-specs__details-detail-value">6.5” OLED</p>
                      </div>
                      <div className="tech-specs__details-detail">
                        <p className="tech-specs__details-detail-key">Resolution</p>
                        <p className="tech-specs__details-detail-value">2688x1242</p>
                      </div>
                      <div className="tech-specs__details-detail">
                        <p className="tech-specs__details-detail-key">Processor</p>
                        <p className="tech-specs__details-detail-value">Apple A12 Bionic</p>
                      </div>
                      <div className="tech-specs__details-detail">
                        <p className="tech-specs__details-detail-key">RAM</p>
                        <p className="tech-specs__details-detail-value">3 GB</p>
                      </div>
                      <div className="tech-specs__details-detail">
                        <p className="tech-specs__details-detail-key">Built in memory</p>
                        <p className="tech-specs__details-detail-value">64 GB</p>
                      </div>
                      <div className="tech-specs__details-detail">
                        <p className="tech-specs__details-detail-key">Camera</p>
                        <p className="tech-specs__details-detail-value">12 Mp + 12 Mp + 12 Mp (Triple)</p>
                      </div>
                      <div className="tech-specs__details-detail">
                        <p className="tech-specs__details-detail-key">Zoom</p>
                        <p className="tech-specs__details-detail-value">Optical, 2x</p>
                      </div>
                      <div className="tech-specs__details-detail">
                        <p className="tech-specs__details-detail-key">Cell</p>
                        <div>
                          <span className="tech-specs__details-detail-value">GSM,</span>
                          <span className="tech-specs__details-detail-value">LTE,</span>
                          <span className="tech-specs__details-detail-value">UMTS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}
    </>
  );
};
