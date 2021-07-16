import { NavLink } from 'react-router-dom';
import { PAGE_MAX_WIDTH } from '../../variables';
import styled from 'styled-components';
import useHeroes from '../../hooks/useHeroes';
import HeroCard from '../../components/HeroCard';

export default function HeroListPage() {
  const { heroList } = useHeroes();

  return (
    <Page>
      <HeroList>
        {heroList.map((hero) => (
          <HeroCard hero={hero} />
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
