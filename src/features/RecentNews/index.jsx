import { useEffect, useReducer } from 'react';
import NewsHeadline from '../../components/NewsHeadline';

import NewsItemList from '../../components/NewsItemList';
import reducer, { effects, initialState } from './reducer';

function RecentNewsFeature() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { error, headline, isLoading, list } = state;

  useEffect(() => {
    effects.fetchRecent(dispatch);
  }, []);

  if (list) {
    return (
      <div>
        <NewsHeadline
          judul={headline.judul}
          poster={headline.poster}
          tipe={headline.tipe}
        />
        <NewsItemList list={list} />
      </div>
    );
  }

  return (
    <div className="App">
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default RecentNewsFeature;
