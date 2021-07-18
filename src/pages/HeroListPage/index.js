import React, { lazy, Suspense } from 'react';
import { MOBILE_WIDTH, PAGE_MAX_WIDTH, TABLET_WIDTH } from '../../variables';
import { Puff as LoadingIcon } from 'react-loading-icons';
import styled from 'styled-components';
import useHeroes from '../../hooks/useHeroes';
const HeroCard = lazy(() => import('./HeroCard'));
const Loader = () => <LoadingIcon />;

export default function HeroListPage() {
  const { heroList } = useHeroes();

  return (
    <Page>
      <HeroList>
        {heroList.map((hero) => (
          <Suspense key={hero.id} fallback={Loader()}>
            <HeroCard hero={hero} />
          </Suspense>
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
  min-height: 240px;

  justify-content: center;
  gap: 10px;
  padding: 10px 0;

  @media screen and (max-width: ${TABLET_WIDTH}) {
    flex-wrap: wrap;
    min-height: 450px;
  }
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    min-height: 910px;
  }
`;
