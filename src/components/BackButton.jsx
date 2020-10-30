import PropTypes from 'prop-types';
import { Link } from '@reach/router';

import MaterialIcons from '../components/MaterialIcons';
import './BackButton.css';

const BackButton = ({ target, label }) => (
  <Link to={target} className="back-button">
    <MaterialIcons name="keyboard_arrow_left" /> <span>Back to {label}</span>
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
