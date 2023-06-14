/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

import { getSearchWith } from '../../utils/searchHelper';
import { getNumbers } from '../../utils/functionsHelpers/getNumbers';

import arowRight from '../../images/arrowRight.svg';
import arrowLeft from '../../images/arrowLeft.svg';

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
            <img
              src={arrowLeft}
              alt="arrow_go_back"
              className={classNames({ imageOpacity: isFirstPage })}
            />
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
            <img
              src={arowRight}
              alt="arrow_go_forward"
              className={classNames({ imageOpacity: isLastPage })}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};
