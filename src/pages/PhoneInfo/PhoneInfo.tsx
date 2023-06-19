/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, {
  useEffect,
  useState,
  useCallback,
} from 'react';
import cn from 'classnames';
import './phoneInfo.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById, getProductByItemId } from '../../api/products';
import { Phone } from '../../types/CardDescription';
import { PageRoute } from '../../controls/PageRoute/PageRoute';
import { MoveBack } from '../../controls/MoveBack/MoveBack';
import { Gallery } from '../../compononts/Gallery/Gallery';
import { Loader } from '../../compononts/Loader/Loader';
import { Button } from '../../controls/Button/Button';
import { YouMayAlsoLike } from '../../compononts/YouMayAlsoLike/YouMayAlsoLike';
import { AboutTitle } from '../../compononts/AboutTitle/AboutTitle';
import { Capacity } from '../../controls/Capacity';
import { Price } from '../../compononts/Price';
import { AbrevSpecs } from '../../compononts/AbrevSpecs';
import { AvailableColors } from '../../compononts/AvailableColors';
import { Specifications } from '../../compononts/Specifications';
import { AboutPhone } from '../../compononts/AboutPhone';
import { PhonesForFavorites } from '../../types/PhonesForFavorites';

export const PhoneInfo = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [phone, setPhone] = useState<Phone | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>(itemId || '');
  const [abbrevPhoneInfo, setAbbrevPhoneInfo] = useState<PhonesForFavorites | null>(null);
  const [isFavoriteSelected, setIsFavoriteSelected] = useState<boolean>(false);

  const favorites = localStorage.getItem('favorites');
  const favoritesArray: number[] = JSON.parse(favorites || '[]');

  // eslint-disable-next-line consistent-return
  const getId = useCallback(() => {
    if (phone?.id && abbrevPhoneInfo?.itemId) {
      if (phone.id === abbrevPhoneInfo.itemId) {
        return abbrevPhoneInfo.id;
      }
    }
  }, [phone?.id, abbrevPhoneInfo?.itemId]);

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

  const getPhoneByItemId = async () => {
    const phoneFromServer = await getProductByItemId(itemId || '');

    setAbbrevPhoneInfo(phoneFromServer);
  };

  const handleAddToFavorites = (productId = '') => {
    // console.log('productId', productId);
  };

  useEffect(() => {
    setQuery(itemId || '');
    loadPhoneById();
    getPhoneByItemId();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    setIsFavoriteSelected(favoritesArray.includes(getId() || 0));
  }, [query, itemId, getId()]);

  return (
    <>
      {
        isLoading
          ? <Loader />
          : (
            <div className="info">
              <div className="container">
                <div className="info__path">
                  <PageRoute to="/phones" phoneName={phone?.name} text="Phones" />
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
                        <div className="available__items">
                          <div className="available__colors">
                            <div className="available__colors-texts">
                              <p className="available__colors-texts-text">Available colors</p>

                              <p className="available__colors-texts-id">ID: 802390</p>
                            </div>

                            <div className="available__colors-colors">
                              {phone?.colorsAvailable && (
                                <AvailableColors
                                  colors={phone.colorsAvailable}
                                  itemId={itemId || ''}
                                  onChange={handleChangeColor}
                                />
                              )}
                            </div>
                          </div>

                          <div className="available__capacity">
                            {phone?.capacityAvailable && (
                              <Capacity
                                capacities={phone?.capacityAvailable}
                                itemId={itemId || ''}
                                onChange={handleChangeCapacity}
                              />
                            )}
                          </div>

                          <div className="available__price">
                            <div className="price">
                              {phone?.priceRegular && <Price price={phone.priceRegular} classes="price__normal" />}

                              {phone?.priceDiscount && <Price price={phone.priceDiscount} classes="price__discount" />}
                            </div>
                          </div>

                          <div className="available__buttons">
                            <div className="buttons">
                              <Button
                                text="Buy now"
                                classes="button-add-to-cart"
                              />

                              <Button
                                classes="button-favorite"
                                isSelected={isFavoriteSelected}
                                onClick={() => handleAddToFavorites(phone?.id)}
                              />
                            </div>
                          </div>

                          <div className="available__abrevspecs">
                            {phone && <AbrevSpecs phone={phone} />}
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
                        {phone && <AboutPhone phone={phone} />}
                      </div>
                    </div>

                    <div className="tech-specs">
                      <div className="tech-specs__about">
                        <div className="tech-specs__about-title">
                          <AboutTitle title="Tech specs" />
                        </div>
                      </div>

                      <div className="tech-specs__details">
                        {phone && <Specifications phone={phone} />}
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
