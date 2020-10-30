import { useReducer } from 'react';
import NewsItemList from '../../components/NewsItemList';
import reducer, { initialState, effects } from './reducer';
import SearchInput from './SearchInput';

function SearchNews() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoading, list } = state;

  const handleSearchNews = (keyword) => {
    effects.fetchByKeyword(dispatch, keyword);
  };

  return (
    <div>
      <SearchInput onSubmit={handleSearchNews} />
      {isLoading ? (
        <div>loading</div>
      ) : (
        <NewsItemList list={list} loading={isLoading} />
      )}
    </div>
  );
}

export default SearchNews;
