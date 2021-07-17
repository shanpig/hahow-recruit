import { PAGE_MAX_WIDTH } from '../../variables';
import styled from 'styled-components';
import useHeroes from '../../hooks/useHeroes';
import HeroCard from './HeroCard';

export default function HeroListPage() {
  const { heroList } = useHeroes();

  return (
    <Page>
      <HeroList>
        {heroList.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </HeroList>
    </Page>
  );
}

const Page = styled.div`
  width: 100%;
  max-width: ${PAGE_MAX_WIDTH};
`;

const HeroList = styled.div`
  display: flex;
  min-height: 180px;

  justify-content: center;
  gap: 10px;
  padding: 10px 0;

  @media screen and (max-width: 560px) {
    flex-wrap: wrap;
  }
`;
