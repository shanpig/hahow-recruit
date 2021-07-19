import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import borderUrl from '../../images/border.png';
import { TABLET_WIDTH } from '../../variables';
import marvelUrl from '../../images/marvel.jpg';

HeroCard.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};

HeroCard.defaultProps = {
  hero: {
    id: '0',
    name: 'hero',
    image: 'https://picsum.photos/100',
  },
};

function HeroCard({ hero }) {
  return (
    <Card to={`/heroes/${hero.id}`} activeClassName="active">
      <ImageHolder>
        <Image src={hero.image} alt={hero.name} />
      </ImageHolder>
      <Title>{hero.name}</Title>
    </Card>
  );
}

export default React.memo(HeroCard);

const Card = styled(NavLink)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  flex: 1 1 25%;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  filter: blur(0.7px) opacity(0.9);

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  &.active {
    filter: none;
    background-color: rgba(255, 255, 255, 0.8);
  }

  @media screen and (max-width: ${TABLET_WIDTH}) {
    flex-basis: 40%;
  }
`;

const ImageHolder = styled.div`
  width: 150px;
  height: 150px;
  background: url(${marvelUrl}) center/75% no-repeat;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
  right: 0;
  bottom: 0;
  border: 7px solid transparent;
  border-image: url(${borderUrl});
  border-image-slice: 10 10 10 10;
`;

const Title = styled.h2`
  width: 100%;
  max-width: 150px;
  height: 30px;
  text-align: center;
  background-color: white;
  margin: 10px 0;
  color: black;
  font-family: 'Marvel', 'sans-serif';
  letter-spacing: 2px;
  border: 1px solid black;
`;
