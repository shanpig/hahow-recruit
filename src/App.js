import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import HeroListPage from './pages/HeroListPage';
import HeroProfilePage from './pages/HeroProfilePage';

function App() {
  return (
    <Router>
      <Route path="/heroes" component={HeroListPage} />
      <Route path="/heroes/:heroId" component={HeroProfilePage} />
      <Route exact path="/">
        <Redirect to="/heroes" />
      </Route>
    </Router>
  );
}

export default App;
