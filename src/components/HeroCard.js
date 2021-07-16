import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function HeroCard({ hero }) {
  return (
    <Card to={`/heroes/${hero.id}`} activeClassName="active">
      <ImageHolder>
        <Image src={hero.image} />
      </ImageHolder>
      <Title>{hero.name}</Title>
    </Card>
  );
}

const ImageHolder = styled.div`
  border: 5px double red;
  width: 100%;
  max-width: 150px;
  aspect-ratio: 1;
`;

const Card = styled(NavLink)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  flex-grow: 1;

  &.active img {
    right: 10px;
    bottom: 10px;
  }
`;

const Image = styled.img`
  max-width: 150px;
  width: 100%;
  position: relative;
  z-index: 10;
  border: 1px solid lightgray;
  transition: all 0.3s ease;
  right: 0;
  bottom: 0;
`;

const Title = styled.h2`
  margin: 10px 0;
  color: white;
  font-family: 'Marvel';
  letter-spacing: 2px;
`;
