/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, {
  useEffect,
  useState,
  Fragment,
} from 'react';
import cn from 'classnames';

import './phoneInfo.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../../api/products';
import { FullPhoneInfo, Phone } from '../../types/CardDescription';
import { PageRoute } from '../../controls/PageRoute/PageRoute';
import { MoveBack } from '../../controls/MoveBack/MoveBack';
import { Gallery } from '../../compononts/Gallery/Gallery';
import { Loader } from '../../compononts/Loader/Loader';
import { Button } from '../../controls/Button/Button';
import { DescriptionTitle } from '../../compononts/DescriptionTitle/DescriptionTitle';

export const PhoneInfo = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [phone, setPhone] = useState<Phone | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>(itemId || '');

  const abbreviatedPhoneInfo = [
    { screen: phone?.screen || '' },
    { resolution: phone?.resolution || '' },
    { ram: phone?.ram || '' },
  ];
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

  const loadPhoneById = async () => {
    setIsLoading(true);
    const phoneFromServer = await getProductById(query || '');

    setIsLoading(false);
    setPhone(phoneFromServer);
  };

  const handleChangeCapacity = (capacity: string) => {
    const newQuery = query
      .split('-')
      .map(str => {
        let res = str;

        if (res.includes('gb')) {
          res = (capacity.toLowerCase());
        }

        return res;
      })
      .join('-');

    setQuery(newQuery);
    navigate(`/phones/${newQuery}`, { replace: true });
  };

  const handleChangeColor = (color: string) => {
    const splitedQuery = query.split('-');
    const index = splitedQuery.length - 1;

    splitedQuery.splice(index, 1, color.toLowerCase());

    const newQuery = splitedQuery.join('-');

    setQuery(newQuery);
    navigate(`/phones/${newQuery}`, { replace: true });
  };

  useEffect(() => {
    loadPhoneById();
  }, [query]);

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
                              onClick={() => handleChangeColor(color)}
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
                            onClick={() => handleChangeCapacity(capacity)}
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
                      {abbreviatedPhoneInfo.map(info => {
                        const [infoField, infoValue]: string[] = Object.entries(info)[0];

                        return (
                          <div className="characterisriics-block__small-info" key={`${infoField} + ${infoValue}`}>
                            <p className="characterisriics-block__small-info-text">{infoField}</p>

                            <p className="characterisriics-block__small-info-info">{infoValue}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="tech-specs">
                    <div className="tech-specs__title">
                      <DescriptionTitle title="Tech specs" />
                    </div>
                    <div className="tech-specs__details">
                      {fullPhoneInfo.map(info => {
                        const [infoField, infoValue] = Object.entries(info)[0];

                        return (
                          <div className="tech-specs__details-detail" key={`${infoField}${infoValue}`}>
                            <p className="tech-specs__details-detail-key">{infoField}</p>
                            {infoField !== 'Cell'
                              ? <p className="tech-specs__details-detail-value">{infoValue}</p>
                              : (
                                <div>
                                  {
                                    Array.isArray(infoValue) && infoValue.map((cell, index: number, array: string[]) => {
                                      return index !== array.length - 1
                                        ? (
                                          <Fragment key={cell}>
                                            <span className="tech-specs__details-detail-value">{`${cell}, `}</span>
                                          </Fragment>
                                        )
                                        : (
                                          <Fragment key={cell}>
                                            <span className="tech-specs__details-detail-value">{`${cell}`}</span>
                                          </Fragment>
                                        );
                                    })
                                  }
                                </div>
                              )}
                          </div>
                        );
                      })}
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
