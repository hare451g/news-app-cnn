import PropTypes from 'prop-types';
import './NewsItem.css';

/**
 * News Item
 * @property {string} judul - judul berita
 * @property {string} poster - poster berita, dalam jpeg
 * @property {string} tipe - tipe atau kategori berita
 * @property {string} waktu - waktu dari berita rilis
 */
const NewsItem = ({ judul, poster, tipe, waktu }) => (
  <div className="news-item-card">
    <img
      alt={`ilustrasi: ${judul}`}
      className="news-item-poster"
      loading="lazy"
      src={poster}
    />
    <div className="news-item-description">
      <span className="news-item-category">{tipe}</span>
      <span className="news-item-title">{judul}</span>
      <span className="news-item-time">{waktu}</span>
    </div>
  </div>
);

NewsItem.propTypes = {
  judul: PropTypes.string,
  poster: PropTypes.string,
  tipe: PropTypes.string,
  waktu: PropTypes.string,
};

NewsItem.defaultProps = {
  judul: '',
  poster: '',
  tipe: '',
  waktu: '',
};

export default NewsItem;
