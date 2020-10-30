import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

import NewsItem from './NewsItem';
import './NewsItemList.css';

/**
 * News Item
 * @property {string} list - list of news item
 */
const NewsItemList = ({ list, isLoading }) => (
  <div className="news-list-container">
    {isLoading ? (
      <div>
        {[...Array(5)].map((_, i) => (
          <ContentLoader
            width={382}
            height={90}
            title="Loading news..."
            key={`loading-news-${i + 1}`}
          >
            <rect x={0} y="0" rx="5" ry="5" width="135" height="90" />
            <rect x={143} y="0" rx="0" ry="0" width="25%" height="12" />
            <rect x={143} y="18" rx="0" ry="0" width="100%" height="48" />
            <rect x={143} y="76" rx="0" ry="0" width="20%" height="12" />
          </ContentLoader>
        ))}
      </div>
    ) : (
      list.map((news, idx) => (
        <NewsItem
          key={`news-${news.tipe}-${news.id}-${idx + 1}`}
          id={news.id}
          judul={news.judul}
          poster={news.poster}
          slug={news.slug}
          tipe={news.tipe}
          waktu={news.waktu}
        />
      ))
    )}
  </div>
);

NewsItemList.propTypes = {
  list: PropTypes.array,
  isLoading: PropTypes.bool,
};

NewsItemList.defaultProps = {
  list: [],
  isLoading: false,
};

export default NewsItemList;
