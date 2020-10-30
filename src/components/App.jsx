import { useEffect, useState } from 'react';
import api from '../api';
import NewsItemList from './NewsItemList';

function App() {
  const [newsItems, setNewsItems] = useState();

  useEffect(() => {
    const performFetch = async () => {
      const { data, error } = await api.getRecentNews();
      if (data) {
        setNewsItems(data);
      }
    };
    performFetch();
  }, []);

  if (newsItems) {
    const { headline, list } = newsItems;
    return <NewsItemList list={list} />;
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

export default App;
