import PropTypes from 'prop-types';

import NewsItem from './NewsItem';
import './NewsItemList.css';

/**
 * News Item
 * @property {string} list - list of news item
 */
const NewsItemList = ({ list }) => (
  <div className="news-list-container">
    {list.map((news, idx) => (
      <NewsItem
        key={`news-item-${idx + 1}`}
        judul={news.judul}
        poster={news.poster}
        tipe={news.tipe}
        waktu={news.waktu}
      />
    ))}
  </div>
);

NewsItemList.propTypes = {
  list: PropTypes.array,
};

NewsItemList.defaultProps = {
  list: [],
};

export default NewsItemList;
