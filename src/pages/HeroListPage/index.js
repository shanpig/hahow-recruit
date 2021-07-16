import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default function HeroListPage() {
  return (
    <Page>
      <HeroList>
        <Link to="/heroes/dareDevil">DareDevil</Link>
        <Link to="/heroes/thor">Thor</Link>
        <Link to="/heroes/ironman">Iron man</Link>
        <Link to="/heroes/hulk">Hulk</Link>
      </HeroList>
    </Page>
  );
}

const Page = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
