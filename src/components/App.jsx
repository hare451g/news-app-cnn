import { useEffect, useState } from 'react';
import api from '../api';
import NewsItem from './NewsItem';

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

    const newsList = list.map((news) => (
      <NewsItem
        judul={news.judul}
        poster={news.poster}
        tipe={news.tipe}
        waktu={news.waktu}
      />
    ));

    return <div>{newsList}</div>;
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
