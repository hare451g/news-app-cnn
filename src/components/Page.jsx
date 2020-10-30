import { useLocation } from '@reach/router';

import NavigationBar from '../features/NavigationBar';
import './Page.css';

function Page({ children }) {
  const { pathname } = useLocation();
  return (
    <div>
      <main className="page-main-content">{children}</main>
      <NavigationBar current={pathname} />
    </div>
  );
}

export default Page;
