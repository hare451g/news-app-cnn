import { Router } from '@reach/router';
import NewsDetailsFeature from '../features/NewsDetails';
import RecentNewsFeature from '../features/RecentNews';

import './App.css';

function App() {
  return (
    <Router>
      <RecentNewsFeature path="/" />
      <NewsDetailsFeature path="/:category/:id/:slug" />
    </Router>
  );
}

export default App;
