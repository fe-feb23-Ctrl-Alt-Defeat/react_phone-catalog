/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { Link, useNavigate, useParams } from 'react-router-dom';

import { getProductById, getProductByItemId } from '../../api/products';
import { FullPhoneInfo, Phone } from '../../types/CardDescription';
import { PageRoute } from '../../controls/PageRoute/PageRoute';
import { MoveBack } from '../../controls/MoveBack/MoveBack';
import { Gallery } from '../../compononts/Gallery/Gallery';
import { Loader } from '../../compononts/Loader/Loader';
import { Button } from '../../controls/Button/Button';

import { YouMayAlsoLike } from '../../compononts/YouMayAlsoLike/YouMayAlsoLike';
import { AboutTitle } from '../../compononts/AboutTitle/AboutTitle';


export const PhoneInfo = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [phone, setPhone] = useState<Phone | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>(itemId || '');
  const [favorites, setFavorites] = useState<number[]>([]);

  const favoriteFromLS = localStorage.getItem('favorites');
  const parsedFavorites = JSON.parse(favoriteFromLS || '[]');

  console.log(parsedFavorites);

  const phoneColors = {
    black: '#000000',
    gold: '#EACFB8',
    silver: '#DEDED7',
    red: '#AE2A36',
    coral: '#E76752',
    yellow: '#F2D365',
    green: '#C8E7D8',
    midnightgreen: '#676E66',
    spacegray: '#62605F',
    white: '#FBF7F2',
    purple: '#D6D3DD',
    rosegold: '#EECFC8',
  };

  const phoneColors = {
    black: '#000000',
    gold: '#EACFB8',
    silver: '#DEDED7',
    red: '#AE2A36',
    coral: '#E76752',
    yellow: '#F2D365',
    green: '#C8E7D8',
    midnightgreen: '#676E66',
    spacegray: '#62605F',
    white: '#FBF7F2',
    purple: '#D6D3DD',
    rosegold: '#EECFC8',
  };

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

  const phoneByItemId = async () => {
    const phoneFromServer = await getProductByItemId(itemId || '');

    console.log(phoneFromServer);
  };

  useEffect(() => {
    loadPhoneById();
    phoneByItemId();
  }, [query]);

  return (
    <>
      {
        isLoading
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
                  <div className="gallery-block">
                    <section className="gallery-container">
                      {phone?.images && <Gallery images={phone.images} />}
                    </section>

                    <section className="available">
                      <div className="available__container">
                        <div className="available__colors">
                          <div className="colors">
                            <p className="colors__text">Available colors</p>
                            <div className="colors__container">
                              {phone?.colorsAvailable.map(color => (
                                <div
                                  key={color}
                                  className={cn('colors__item', { 'colors__item--selected': itemId?.includes(color.toLowerCase()) })}
                                  onClick={() => handleChangeColor(color)}
                                >
                                  <div
                                    className="colors__item-color"
                                    style={{ backgroundColor: phoneColors[color] }}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="available__capacity">
                            <div className="capacity">
                              <p className="capacity__text">Select capacity</p>

                              <div className="capacity__items">
                                {phone?.capacityAvailable.map(capacity => (
                                  <Button
                                    key={capacity}
                                    text={capacity}
                                    classes={cn('button-capacity', { 'button-capacity--selected': itemId?.includes(capacity.toLowerCase()) })}
                                    onClick={() => handleChangeCapacity(capacity)}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="available__price">
                            <div className="price">
                              <div className="price__normal">{`$${phone?.priceRegular}`}</div>
                              <div className="price__discount">{`$${phone?.priceDiscount}`}</div>
                            </div>
                          </div>

                          <div className="available__buttons">
                            <div className="buttons">
                              <Button
                                text="Buy now"
                                classes="button-add-to-cart"
                              />

                              <Button classes="button-favorite" />
                            </div>
                          </div>

                          <div className="available__abrevspecs">
                            {abbreviatedPhoneInfo.map(info => {
                              const [infoField, infoValue]: string[] = Object.entries(info)[0];

                              return (
                                <div className="abrevspecs" key={`${infoField} + ${infoValue}`}>
                                  <p className="abrevspecs__field">{infoField}</p>

                                  <p className="abrevspecs__info">{infoValue}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <p className="available__container-id">ID: 802390</p>
                      </div>
                    </section>
                  </div>

                  <div className="about-block">
                    <div className="about-phone">
                      <div className="about-phone__title">
                        <AboutTitle title="About" />
                      </div>
                      <div className="about-phone__description">
                        {phone?.description.map(descr => (
                          <article className="article" key={descr.title}>
                            <h4 className="article__title">{descr.title}</h4>
                            <p className="article__text">
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
                      </div>
                    </div>

                    <div className="tech-specs">
                      <div className="tech-specs__about">
                        <div className="tech-specs__about-title">
                          <AboutTitle title="Tech specs" />
                        </div>
                      </div>

                      <div className="tech-specs__details">
                        {fullPhoneInfo.map(info => {
                          const [infoField, infoValue] = Object.entries(info)[0];

                          return (
                            <div className="detail" key={`${infoField}${infoValue}`}>
                              <p className="detail__field">{infoField}</p>
                              {infoField !== 'Cell'
                                ? <p className="detail__info">{infoValue}</p>
                                : (
                                  <div>
                                    {Array.isArray(infoValue) && infoValue.map((
                                      cell,
                                      index: number,
                                      array: string[],
                                    ) => (
                                      <Fragment key={cell}>
                                        <span className="detail__info">
                                          {
                                            index !== array.length - 1
                                              ? `${cell}, `
                                              : `${cell}`
                                          }
                                        </span>
                                      </Fragment>
                                    ))}
                                  </div>
                                )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <YouMayAlsoLike />
              </div>
            </div>
          )
      }
    </>
  );
};
