import SearchInput from './SearchInput';

function SearchNews() {
  const handleSearchNews = (keyword) => {
    console.log(keyword);
  };

  return (
    <div>
      <SearchInput onSubmit={handleSearchNews} />
    </div>
  );
}

export default SearchNews;
