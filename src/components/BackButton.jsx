import PropTypes from 'prop-types';
import { navigate } from '@reach/router';

import MaterialIcons from '../components/MaterialIcons';
import './BackButton.css';

const BackButton = ({ label }) => (
  <button className="back-button" onClick={() => navigate(-1)}>
    <MaterialIcons name="keyboard_arrow_left" />{' '}
    <span>Kembali ke berita {label}</span>
  </button>
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
