import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import ContentLoader from 'react-content-loader';

import './NewsHeadline.css';

/**
 * News Headline
 * @property {string} judul - judul berita
 * @property {string} poster - poster berita, dalam jpeg
 * @property {string} tipe - tipe atau kategori berita
 * @property {string} id - id berita
 * @property {string} slug - slug dari judul berita
 */
const NewsHeadline = ({ judul, poster, tipe, id, slug, isLoading }) =>
  isLoading ? (
    <ContentLoader viewBox="0 0 500 280" height={300} width={382}>
      <rect x="0" y="0" rx="10" ry="10" width="100%" height="180" />
      <rect x="0" y="190" rx="0" ry="0" width="40%" height="20" />
      <rect x="0" y="215" rx="0" ry="0" width="90%" height="20" />
      <rect x="0" y="242" rx="0" ry="0" width="85%" height="20" />
    </ContentLoader>
  ) : (
    <Link to={`${tipe}/${id}/${slug}`}>
      <div className="news-headline-container">
        <img
          alt={`ilustrasi: ${judul}`}
          className="news-headline-poster"
          loading="lazy"
          src={poster}
        />
        <span className="news-headline-category">{tipe}</span>
        <span className="news-headline-title">{judul}</span>
      </div>
    </Link>
  );

NewsHeadline.propTypes = {
  judul: PropTypes.string,
  poster: PropTypes.string,
  tipe: PropTypes.string,
  id: PropTypes.string,
  slugtipe: PropTypes.string,
};

NewsHeadline.defaultProps = {
  judul: '',
  poster: '',
  tipe: '',
  id: '',
  slug: '',
};

export default NewsHeadline;
