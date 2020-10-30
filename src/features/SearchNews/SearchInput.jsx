import { useState } from 'react';
import PropTypes from 'prop-types';

import MaterialIcons from '../../components/MaterialIcons';
import './SearchInput.css';

function SearchInput({ onSubmit }) {
  const [keyword, setKeyword] = useState('');

  const handleClearClick = (e) => {
    setKeyword('');
  };
  const handleKeywordChange = (e) => setKeyword(e.target.value);
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    onSubmit(keyword);
  };

  return (
    <form className="search-news-container" onSubmit={handleSubmitSearch}>
      <button className="search-news-icon-button" type="submit">
        <MaterialIcons name="search" />
      </button>
      <input
        className="search-news-input"
        name="keyword"
        value={keyword}
        onChange={handleKeywordChange}
        placeholder="Masukan keyword pencarian"
      />
      {keyword && (
        <button className="search-news-icon-button" onClick={handleClearClick}>
          <MaterialIcons name="clear" />
        </button>
      )}
    </form>
  );
}

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchInput;
