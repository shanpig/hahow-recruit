import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function HeroCard({ hero }) {
  return (
    <Card to={`/heroes/${hero.id}`} activeClassName="active">
      <Image src={hero.image} />
      <Title>{hero.name}</Title>
    </Card>
  );
}

const Card = styled(NavLink)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  flex-grow: 1;

  &.active {
    border: 1px solid red;
  }
`;

const Image = styled.img`
  max-width: 150px;
  width: 100%;
`;

const Title = styled.h2`
  margin: 10px 0;
`;
