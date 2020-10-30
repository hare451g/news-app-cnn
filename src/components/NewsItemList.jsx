import PropTypes from 'prop-types';

import NewsItem from './NewsItem';
import './NewsItemList.css';

/**
 * News Item
 * @property {string} list - list of news item
 */
function NewsItemList({ list }) {
  const newsList = list.map((news) => (
    <NewsItem
      judul={news.judul}
      poster={news.poster}
      tipe={news.tipe}
      waktu={news.waktu}
    />
  ));

  return <div className="news-list-container">{newsList}</div>;
}

NewsItemList.propTypes = {
  list: PropTypes.array,
};

NewsItemList.defaultProps = {
  list: [],
};

export default NewsItemList;
