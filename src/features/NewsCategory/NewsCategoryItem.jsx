import PropTypes from 'prop-types';
import { Link } from '@reach/router';

import './NewsCategoryItem.css';

const NewsCategoryItem = ({ imgURL, name }) => (
  <Link className="news-category-item" to={`/kategori/${name}`}>
    <img
      className="news-category-img"
      loading="lazy"
      src={imgURL}
      alt={`ilustrasi kategori ${name}`}
    />
    <div className="news-category-label">{name}</div>
  </Link>
);

NewsCategoryItem.propTypes = {
  imgURL: PropTypes.string,
  name: PropTypes.string,
};

NewsCategoryItem.defaultProps = {
  imgURL: '',
  name: '',
};

export default NewsCategoryItem;
