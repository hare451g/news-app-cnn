import { Router } from '@reach/router';
import CategoryPage from '../routes/Category';

import DetailsPage from '../routes/Details';
import NewsListPage from '../routes/NewsList';
import NotFoundPage from '../routes/NotFound';
import SearchPage from '../routes/SearchPage';

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <NewsListPage path="/" />
        <CategoryPage path="/kategori/" />
        <NewsListPage path="/kategori/:category" />
        <SearchPage path="/pencarian/" />
        <DetailsPage path="/:category/:id/:slug" />
        <NotFoundPage path="*" />
      </Router>
    </div>
  );
}

export default App;
