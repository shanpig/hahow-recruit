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
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </HeroList>
    </Page>
  );
}

const Page = styled.div`
  max-width: ${PAGE_MAX_WIDTH};
  margin: 0 auto;
`;

const HeroList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;
