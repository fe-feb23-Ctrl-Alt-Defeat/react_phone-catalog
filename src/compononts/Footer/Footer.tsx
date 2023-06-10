/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import up_arrow from '../../images/up_arrow.svg';
import logo from '../../images/logo_gnce_gadgets.svg';

import './footer.scss';

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <a href="/home" className="footer__logo">
            <img
              src={logo}
              alt="logo"
              className="footer__logo_img"
            />
          </a>

          <ul className="footer__list">
            <li className="footer__list_item">
              <a href="/github" className="footer__list_link">
                github
              </a>
            </li>
            <li className="footer__list_item">
              <a href="/contacts" className="footer__list_link">
                contacts
              </a>
            </li>
            <li className="footer__list_item">
              <a href="/contacts" className="footer__list_link">
                rights
              </a>
            </li>
          </ul>

          <div className="footer__toTop">
            <div className="footer__toTop-text">
              Back to top
            </div>
            <div
              className="footer__toTop_arrow"
              onClick={handleScrollToTop}
            >
              <img src={up_arrow} alt="go to top" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
