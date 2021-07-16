import styled from 'styled-components';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import HeroListPage from './pages/HeroListPage';
import HeroProfilePage from './pages/HeroProfilePage';

function App() {
  return (
    <Page>
      <Router>
        <Route path="/heroes" component={HeroListPage} />
        <Route path="/heroes/:heroId" component={HeroProfilePage} />
        <Route exact path="/">
          <Redirect to="/heroes" />
        </Route>
      </Router>
    </Page>
  );
}

const Page = styled.div`
  min-height: 100vh;
  background-color: rgba(20, 20, 20);
  padding-top: 50px;
`;

export default App;
