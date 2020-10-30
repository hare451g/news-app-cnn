import { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import BackButton from '../../components/BackButton';
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
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div>loading . . . </div>;
  }

  if (body) {
    return (
      <div>
        <nav className="news-details-nav">
          <BackButton to="/" label="Recent News" />
        </nav>
        <NewsDetailLayout
          body={body}
          category={category}
          judul={judul}
          poster={poster}
        />
      </div>
    );
  }

  return (
    <div>
      News details feature {category}, {id}, {slug}
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
