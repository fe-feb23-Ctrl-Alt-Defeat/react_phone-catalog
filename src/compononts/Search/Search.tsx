/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import './search.scss';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/searchHelper';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setSearchParams(
      getSearchWith(searchParams, { query: query || null }),
    );
  };

  useEffect(() => {
    setSearchParams(
      getSearchWith(searchParams, { query: null }),
    );
  }, []);

  return (
    <div>
      <form className="containers" onSubmit={handleSubmit}>
        <input
          placeholder="Type to search..."
          required
          className="input"
          name="text"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="icon">
          <svg viewBox="0 0 512 512" className="ionicon" xmlns="http://www.w3.org/2000/svg">
            <title>Search</title>
            <path strokeWidth="32" strokeMiterlimit="10" stroke="currentColor" fill="none" d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"></path>
            <path d="M338.29 338.29L448 448" strokeWidth="32" strokeMiterlimit="10" strokeLinecap="round" stroke="currentColor" fill="none"></path>
          </svg>
        </div>
      </form>
    </div>
  );
};
