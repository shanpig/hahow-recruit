import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import borderUrl from '../images/border.png';

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

const Card = styled(NavLink)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  flex-grow: 1;
  flex-shrink: 1;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  filter: blur(0.7px) opacity(0.9);

  &.active {
    filter: none;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const ImageHolder = styled.div`
  width: 100%;
  max-width: 150px;
  aspect-ratio: 1;
`;

const Image = styled.img`
  max-width: 150px;
  width: 100%;
  position: relative;
  z-index: 10;
  right: 0;
  bottom: 0;
  border: 7px solid transparent;
  border-image: url(${borderUrl});
  border-image-slice: 10 10 10 10;

  /* border: 4px solid white;
  outline: 1px solid black; */
`;

const Title = styled.h2`
  width: 100%;
  max-width: 150px;
  text-align: center;
  background-color: white;
  margin: 10px 0;
  color: black;
  font-family: 'Marvel';
  letter-spacing: 2px;
  border: 1px solid black;
`;
