import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import './NewsHeadline.css';

/**
 * News Headline
 * @property {string} judul - judul berita
 * @property {string} poster - poster berita, dalam jpeg
 * @property {string} tipe - tipe atau kategori berita
 * @property {string} id - id berita
 * @property {string} slug - slug dari judul berita
 */
const NewsHeadline = ({ judul, poster, tipe, id, slug }) => (
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
