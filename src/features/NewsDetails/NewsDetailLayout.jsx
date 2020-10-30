import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

import ArticleBodyRenderer from '../../components/ArticleBodyRenderer';
import './NewsDetailLayout.css';

const NewsDetailLayout = ({ body, category, isLoading, judul, poster }) =>
  isLoading ? (
    <ContentLoader viewBox="0 0 500 280" height={300} width={382}>
      <rect x="0" y="0" rx="10" ry="10" width="100%" height="180" />
      <rect x="0" y="190" rx="0" ry="0" width="40%" height="20" />
      <rect x="0" y="215" rx="0" ry="0" width="90%" height="20" />
      <rect x="0" y="242" rx="0" ry="0" width="85%" height="20" />
    </ContentLoader>
  ) : (
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
  isLoading: PropTypes.bool,
};

NewsDetailLayout.defaultProps = {
  body: null,
  category: null,
  judul: null,
  poster: null,
  isLoading: false,
};

export default NewsDetailLayout;
