import { Router } from '@reach/router';

import DetailsPage from '../routes/Details';
import HomePage from '../routes/Home';

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <HomePage path="/" />
        <DetailsPage path="/:category/:id/:slug" />
      </Router>
    </div>
  );
}

export default App;
