import MaterialIcons from '../../components/MaterialIcons';
import './index.css';

const SearchJobs = () => (
  <div className="job-search-container">
    <MaterialIcons name="search" />
    <input className="job-search-input" name="keyword" />
  </div>
);

export default SearchJobs;
