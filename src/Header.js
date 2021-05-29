import React from 'react';
import Book from '../src/images/books.webp';

export default function Header() {
  return (
    <div className="Header">
      <h1>
        <img src={Book} alt="logo" width="80" height="60" />{' '}
        <span className="Title" style={{ fontSize: '25px' }}>
          Dictionary
        </span>{' '}
        <img src={Book} alt="logo" width="80" height="60" />
      </h1>
      <h5>Search for a Word !</h5>
    </div>
  );
}
