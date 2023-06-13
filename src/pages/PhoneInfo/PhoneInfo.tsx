/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import './phoneInfo.scss';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/products';
import { Phone } from '../../types/CardDescription';
import { PageRoute } from '../../controls/PageRoute/PageRoute';
import { MoveBack } from '../../controls/MoveBack/MoveBack';
import { Gallery } from '../../compononts/Gallery/Gallery';
import {
  AboutDescriptionTitle,
} from '../../compononts/AboutDescriptionTitle/AboutDescription';
import redHeart from '../../images/redHeart.svg';

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
            <div className="info__content-description-gallery">
              {phone?.images && <Gallery images={phone?.images} />}
            </div>
            <div className="info__content-description-title">
              <AboutDescriptionTitle />
            </div>

            <article className="article">
              <h4 className="article__title">And then there was Pro</h4>
              <p className="artilce__text">
                A transformative triple‑camera system that adds tons of capability without complexity.
                <br />
                <br />
                An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.
              </p>
            </article>

            <article className="article">
              <h4 className="article__title">Camera</h4>
              <p className="artilce__text">
                Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.
              </p>
            </article>

            <article className="article">
              <h4 className="article__title">Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.</h4>
              <p className="artilce__text">
                iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.
              </p>
            </article>
          </section>

          <section className="info__content-characteristics">
            <div className="available-colors">
              <p className="available-colors__text">Available colors</p>
              <p className="available-colors__id">ID: 802390</p>
            </div>

            <div className="color-selects">
              <div className="color-selects__colors">

                {phone?.colorsAvailable && phone.colorsAvailable.map(color => (
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
              {phone?.capacityAvailable && phone.capacityAvailable.map(capacity => (
                <button
                  type="button"
                  className="card__buy_button card__buy_button"
                >
                  {capacity}
                </button>
              ))}

            </div>

            <div className="under-line" />

            <div className="price">
              <div className="card__price">
                <div className="card__price_normal">
                  {`${phone?.priceRegular}$`}
                </div>
                <div className="card__price_discount">
                  {`${phone?.priceDiscount}$`}
                </div>
              </div>
            </div>

            <div className="buttons-block">
              <button type="button" className="card__buy_button">
                Added to cart
              </button>

              <button
                type="button"
                className="card__buy_favorite"
              >
                <img
                  src={redHeart}
                  alt="favourite"
                  className="card__buy_favorite-img-isSelected"
                />
              </button>
            </div>

          </section>
        </div>
      </div>
    </div>
  );
};
