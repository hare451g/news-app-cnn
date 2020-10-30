import { Link } from '@reach/router';
import MaterialIcons from '../../components/MaterialIcons';
import './index.css';

const pages = [
  {
    label: 'Terkini',
    icon: 'schedule',
    route: '/',
  },
  {
    label: 'Pencarian',
    icon: 'schedule',
    route: '/pencarian',
  },
  {
    label: 'Kategori',
    icon: 'category',
    route: '/kategori',
  },
];

const NavigationBar = ({ current = '/' }) => (
  <div className="navigation-bar-container">
    <nav className="navigation-bar">
      {pages.map(({ label, icon, route }) => (
        <Link to={route}>
          <div
            className={`navigation-bar-item ${route === current && 'active'}`}
            key={route}
          >
            <MaterialIcons name={icon} />
            <span>{label}</span>
          </div>
        </Link>
      ))}
    </nav>
  </div>
);

export default NavigationBar;
