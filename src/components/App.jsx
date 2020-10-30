import { Router } from '@reach/router';
import NewsDetailsFeature from '../features/NewsDetails';

import RecentNewsFeature from '../features/RecentNews';

function App() {
  return (
    <Router>
      <RecentNewsFeature path="/" />
      <NewsDetailsFeature path="/details/:link" />
    </Router>
  );
}

export default App;
