import { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import reducer, { initialState, effects } from './reducer';
import NewsDetailLayout from './NewsDetailLayout';
import './index.css';

function NewsDetailsFeature({ category, id, slug }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { error, isLoading, judul, poster, body } = state;

  useEffect(() => {
    effects.fetchDetails(dispatch, category, id, slug);
  }, [category, id, slug]);

  if (error) {
    return (
      <div>
        <h3>Something went wrong:</h3>
        <p>error: {error || 'unhandled error occurred'}</p>
      </div>
    );
  }

  return (
    <div className="news-details-container">
      <NewsDetailLayout
        body={body}
        category={category}
        judul={judul}
        poster={poster}
        isLoading={isLoading}
      />
    </div>
  );
}

NewsDetailsFeature.propTypes = {
  category: PropTypes.string,
  id: PropTypes.string,
  slug: PropTypes.string,
};

NewsDetailsFeature.defaultProps = {
  category: null,
  id: null,
  slug: null,
};

export default NewsDetailsFeature;
