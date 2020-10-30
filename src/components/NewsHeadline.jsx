import PropTypes from 'prop-types';
import './NewsHeadline.css';

/**
 * News Headline
 * @property {string} judul - judul berita
 * @property {string} poster - poster berita, dalam jpeg
 * @property {string} tipe - tipe atau kategori berita
 */
const NewsHeadline = ({ judul, poster, tipe }) => (
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
);

NewsHeadline.propTypes = {
  judul: PropTypes.string,
  poster: PropTypes.string,
  tipe: PropTypes.string,
};

NewsHeadline.defaultProps = {
  judul: '',
  poster: '',
  tipe: '',
};

export default NewsHeadline;
