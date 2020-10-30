import PropTypes from 'prop-types';
import './MaterialIcons.css';

const MaterialIcons = ({ name }) => (
  <span className="material-icons-wrapper">
    <i className="material-icons">{name}</i>
  </span>
);

MaterialIcons.propTypes = {
  name: PropTypes.string,
};

MaterialIcons.defaultProps = {
  name: 'question_mark',
};

export default MaterialIcons;
