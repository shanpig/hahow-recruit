import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeroListPage from './pages/HeroListPage';
import HeroProfilePage from './pages/HeroProfilePage';

function App() {
  return (
    <Router>
      <Route path="/heroes" component={HeroListPage} />
      <Route path="/heroes/:heroId" component={HeroProfilePage} />
    </Router>
  );
}

export default App;
