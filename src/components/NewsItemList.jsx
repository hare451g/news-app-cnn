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
        key={`news-${news.tipe}-${news.id}-${idx + 1}`}
        id={news.id}
        judul={news.judul}
        poster={news.poster}
        slug={news.slug}
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
