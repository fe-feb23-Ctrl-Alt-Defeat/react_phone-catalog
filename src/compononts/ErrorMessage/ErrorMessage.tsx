/* eslint-disable max-len */
import React, { FC } from 'react';
import './errorMessage.scss';

interface Props {
  errorTitle: string;
}

export const ErrorMessage: FC<Props> = ({ errorTitle }) => {
  return (
    <div className="errorContainer">
      <div className="container">
        <div className="errorContainer__content">
          {/* <div className="errorContainer__content_home">
            <a href="/">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7.59087 0.807088C7.83161 0.619846 8.16872 0.619846 8.40946 0.807088L14.4095 5.47375C14.5718 5.60006 14.6668 5.79426 14.6668 5.99999V13.3333C14.6668 13.8638 14.4561 14.3725 14.081 14.7475C13.706 15.1226 13.1973 15.3333 12.6668 15.3333H3.3335C2.80306 15.3333 2.29436 15.1226 1.91928 14.7475C1.54421 14.3725 1.3335 13.8638 1.3335 13.3333V5.99999C1.3335 5.79426 1.42848 5.60006 1.59087 5.47375L7.59087 0.807088ZM2.66683 6.32605V13.3333C2.66683 13.5101 2.73707 13.6797 2.86209 13.8047C2.98712 13.9298 3.15669 14 3.3335 14H12.6668C12.8436 14 13.0132 13.9298 13.1382 13.8047C13.2633 13.6797 13.3335 13.5101 13.3335 13.3333V6.32605L8.00016 2.1779L2.66683 6.32605Z" />
                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.3335 8.00001C5.3335 7.63182 5.63197 7.33334 6.00016 7.33334H10.0002C10.3684 7.33334 10.6668 7.63182 10.6668 8.00001V14.6667C10.6668 15.0349 10.3684 15.3333 10.0002 15.3333C9.63197 15.3333 9.3335 15.0349 9.3335 14.6667V8.66668H6.66683V14.6667C6.66683 15.0349 6.36835 15.3333 6.00016 15.3333C5.63197 15.3333 5.3335 15.0349 5.3335 14.6667V8.00001Z" />
              </svg>

            </a>
          </div> */}
          <div className="errorContainer__content_title">
            {errorTitle}
          </div>
        </div>
      </div>
    </div>
  );
};
