import PropTypes from 'prop-types';
import { Link } from '@reach/router';

import './BackButton.css';

const BackButton = ({ target, label }) => (
  <Link to={target} className="back-button">
    Back to {label}
  </Link>
);

BackButton.propTypes = {
  target: PropTypes.string,
  label: PropTypes.string,
};

BackButton.defaultProps = {
  target: '/',
  label: 'home',
};

export default BackButton;
