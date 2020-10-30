import { Link } from '@reach/router';
import MaterialIcons from '../../components/MaterialIcons';
import './index.css';

function NavigationBar() {
  return (
    <div className="navigation-bar-container">
      <nav className="navigation-bar">
        <Link to="/" className="navigation-bar-item">
          <MaterialIcons name="schedule" />
          <span>Terkini</span>
        </Link>
        <div className="navigation-bar-item">
          <MaterialIcons name="search" />
          <span>Pencarian</span>
        </div>
        <div className="navigation-bar-item">
          <MaterialIcons name="category" />
          <span>Kategori</span>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
