import styled from 'styled-components';
import { useParams } from 'react-router';
export default function HeroProfilePage() {
  const { heroId } = useParams();
  return <Page>This is the hero profile page of {heroId}</Page>;
}

const Page = styled.div``;
