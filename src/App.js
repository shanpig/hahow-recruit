import styled from 'styled-components';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import HeroListPage from './pages/HeroListPage';
import HeroProfilePage from './pages/HeroProfilePage';
import backgroundUrl from './images/marvel-background.jpg';

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
  background: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${backgroundUrl});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export default App;
