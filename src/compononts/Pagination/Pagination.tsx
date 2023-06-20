/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

import { getSearchWith } from '../../utils/searchHelper';
import { getNumbers } from '../../utils/functionsHelpers/getNumbers';

import './Pagination.scss';

interface Props {
  limit: string;
  total: number;
  page: string
}

export const Pagination: FC<Props> = ({ limit, total, page }) => {
  const [searchParams] = useSearchParams();

  const currentPage = Number(page);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const pagesQuantity = Math.ceil(+total / +limit);
  const pages = getNumbers(1, pagesQuantity);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pages.length;

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__list_item">
          <Link
            className={classNames('pagination__list_link arrowsPagination', {
              disabledLink: isFirstPage,
            })}
            to={{
              search: getSearchWith(searchParams, {
                page: String(prevPage),
              }),
            }}
            style={{ pointerEvents: isFirstPage ? 'none' : 'auto' }}
          >
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" className={classNames({ imageOpacity: isFirstPage })} fillRule="evenodd" clipRule="evenodd" d="M5.47124 0.528514C5.21089 0.268165 4.78878 0.268165 4.52843 0.528514L0.528433 4.52851C0.268083 4.78886 0.268083 5.21097 0.528433 5.47132L4.52843 9.47132C4.78878 9.73167 5.21089 9.73167 5.47124 9.47132C5.73159 9.21097 5.73159 8.78886 5.47124 8.52851L1.94265 4.99992L5.47124 1.47132C5.73159 1.21097 5.73159 0.788864 5.47124 0.528514Z" />
            </svg>
          </Link>
        </li>

        {pages.map(pageNum => (
          <li
            className="pagination__list_item"
            key={pageNum}
          >
            <Link
              className={classNames('pagination__list_link', {
                isSelectedPagination: +page === pageNum,
              })}
              to={{
                search: getSearchWith(searchParams, { page: String(pageNum) }),
              }}
              aria-disabled={isFirstPage}
            >
              {pageNum}
            </Link>
          </li>
        ))}

        <li className="pagination__list_item">
          <Link
            className={classNames('pagination__list_link arrowsPagination', {
              disabledLink: isFirstPage,
            })}
            to={{
              search: getSearchWith(searchParams, { page: String(nextPage) }),
            }}
            style={{ pointerEvents: isLastPage ? 'none' : 'auto' }}
          >

            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" className={classNames({ imageOpacity: isLastPage })} fillRule="evenodd" clipRule="evenodd" d="M0.528758 0.528514C0.789108 0.268165 1.21122 0.268165 1.47157 0.528514L5.47157 4.52851C5.73192 4.78886 5.73192 5.21097 5.47157 5.47132L1.47157 9.47132C1.21122 9.73167 0.789108 9.73167 0.528758 9.47132C0.268409 9.21097 0.268409 8.78886 0.528758 8.52851L4.05735 4.99992L0.528758 1.47132C0.268409 1.21097 0.268409 0.788864 0.528758 0.528514Z" />
            </svg>

          </Link>
        </li>
      </ul>
    </div>
  );
};
