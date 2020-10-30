import { Router } from '@reach/router';
import NavigationBar from '../features/NavigationBar';
import NewsDetailsFeature from '../features/NewsDetails';
import RecentNewsFeature from '../features/RecentNews';

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <RecentNewsFeature path="/" />
        <NewsDetailsFeature path="/:category/:id/:slug" />
      </Router>
      <NavigationBar />
    </div>
  );
}

export default App;
