import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';

import NavigationBar from '../features/NavigationBar';
import './Page.css';

function Page({ children, title }) {
  const { pathname } = useLocation();
  return (
    <div>
      <h1 className="page-main-title">{title}</h1>
      <main className="page-main-content">{children}</main>
      <NavigationBar current={pathname} />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Page.defaultProps = {
  title: null,
};

export default Page;
