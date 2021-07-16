import { NavLink } from 'react-router-dom';
import { PAGE_MAX_WIDTH } from '../../variables';
import styled from 'styled-components';
import daredevilUrl from '../../images/daredevil.jpg';
import thorUrl from '../../images/thor.jpg';
import ironmanUrl from '../../images/ironman.jpg';
import hulkUrl from '../../images/hulk.jpg';
export default function HeroListPage() {
  return (
    <Page>
      <HeroList>
        <HeroCard to="/heroes/dareDevil" activeClass="active">
          <HeroImage src={daredevilUrl} />
          <HeroTitle>DareDevil</HeroTitle>
        </HeroCard>
        <HeroCard to="/heroes/thor" activeClass="active">
          <HeroImage src={thorUrl} />
          <HeroTitle>Thor</HeroTitle>
        </HeroCard>
        <HeroCard to="/heroes/ironman" activeClass="active">
          <HeroImage src={ironmanUrl} />
          <HeroTitle>Iron man</HeroTitle>
        </HeroCard>
        <HeroCard to="/heroes/hulk" activeClass="active">
          <HeroImage src={hulkUrl} />
          <HeroTitle>Hulk</HeroTitle>
        </HeroCard>
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
