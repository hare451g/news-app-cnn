import { useEffect, useReducer } from 'react';
import NewsHeadline from '../../components/NewsHeadline';

import NewsItemList from '../../components/NewsItemList';
import reducer, { effects, initialState } from './reducer';
import './index.css';

function AllNewsFeature() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { error, headline, isLoading, list } = state;

  useEffect(() => {
    effects.fetchRecent(dispatch);
  }, []);

  if (error) {
    return <div>{error} </div>;
  }

  return (
    <div className="recent-news-container">
      <NewsHeadline
        judul={headline.judul}
        poster={headline.poster}
        tipe={headline.tipe}
        id={headline.id}
        slug={headline.slug}
        isLoading={isLoading}
      />
      <NewsItemList list={list} isLoading={isLoading} />
    </div>
  );
}

export default AllNewsFeature;
