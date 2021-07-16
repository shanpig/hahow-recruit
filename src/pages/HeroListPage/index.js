import { NavLink } from 'react-router-dom';
import { PAGE_MAX_WIDTH } from '../../variables';
import styled from 'styled-components';
import { getHeroList } from '../../api';
import { useEffect, useState } from 'react';

export default function HeroListPage() {
  const [heroList, setHeroList] = useState([]);
  useEffect(() => {
    getHeroList().then((data) => {
      console.log(data);
      setHeroList(data);
    });
  }, []);

  return (
    <Page>
      <HeroList>
        {heroList.map((hero) => (
          <HeroCard
            key={hero.id}
            to={`/heroes/${hero.id}`}
            activeClassName="active"
          >
            <HeroImage src={hero.image} />
            <HeroTitle>{hero.name}</HeroTitle>
          </HeroCard>
        ))}
      </HeroList>
    </Page>
  );
}

const Page = styled.div`
  max-width: ${PAGE_MAX_WIDTH};
  margin: 50px auto 0;
`;

const HeroList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const HeroCard = styled(NavLink)`
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

const HeroImage = styled.img`
  max-width: 150px;
  width: 100%;
`;

const HeroTitle = styled.h2`
  margin: 10px 0;
`;
