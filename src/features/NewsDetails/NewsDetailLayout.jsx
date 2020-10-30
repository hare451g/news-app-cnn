import PropTypes from 'prop-types';

import ArticleBodyRenderer from '../../components/ArticleBodyRenderer';
import './NewsDetailLayout.css';

const NewsDetailLayout = ({ body, category, judul, poster }) => (
  <div className="news-detail-layout">
    <img
      alt={`poster: ${judul}`}
      className="news-detail-poster"
      src={poster}
      loading="lazy"
    />
    <p className="news-detail-category">{category}</p>
    <h1 className="news-detail-title">{judul}</h1>
    <ArticleBodyRenderer body={body} />
  </div>
);

NewsDetailLayout.propTypes = {
  body: PropTypes.string,
  category: PropTypes.string,
  judul: PropTypes.string,
  poster: PropTypes.string,
};

NewsDetailLayout.defaultProps = {
  body: null,
  category: null,
  judul: null,
  poster: null,
};

export default NewsDetailLayout;
