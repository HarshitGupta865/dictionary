import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import Photos from './Photos';

import './SearchEngine.css';

export default function Dictionary() {
  let [keyword, setKeyword] = useState('');
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    let apiKey = '563492ad6f917000010000012f505ff95d9c49fab5152601840fc351';
    let imageApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;

    axios
      .get(imageApiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handlePexelResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          className="search"
          placeholder="Type here..."
          onChange={handleKeywordChange}
        />
        <input
          type="submit"
          value="Search"
          className="submit-btn"
          id="searchBtn"
        />
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
