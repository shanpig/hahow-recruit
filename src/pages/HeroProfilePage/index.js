import styled from 'styled-components';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { PAGE_MAX_WIDTH } from '../../variables';
import useStatistics from '../../hooks/useStatistics';
import StatisticsControl from './StatisticsControl';
import SaveProfileButton from './SaveProfileButton';

export default function HeroProfilePage() {
  const { heroId } = useParams();
  const [isSaving, setIsSaving] = useState(false);
  const { statistics, increment, decrement, save, remainPoints } =
    useStatistics(heroId);

  function saveHandler() {
    setIsSaving(true);
    save().then(() => {
      setIsSaving(false);
    });
  }

  return (
    <Page>
      <PageLeft>
        <StatisticsControl
          statistics={statistics}
          increment={increment}
          decrement={decrement}
          remainPoints={remainPoints}
        ></StatisticsControl>
      </PageLeft>
      <PageRight>
        <RemainPoints>
          剩餘點數 : <span>{remainPoints}</span>
        </RemainPoints>
        <SaveProfileButton
          saveHandler={saveHandler}
          disabled={remainPoints !== 0 || isSaving}
          isSaving={isSaving}
        />
      </PageRight>
    </Page>
  );
}

const Page = styled.div`
  width: 100%;
  max-width: ${PAGE_MAX_WIDTH};
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff44;
  backdrop-filter: blur(5px);

  @media screen and (max-width: 690px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const PageLeft = styled.div`
  width: 60%;
  @media screen and (max-width: 690px) {
    width: unset;
  }
`;

const PageRight = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  @media screen and (max-width: 690px) {
    font-size: 10pt;
    align-items: flex-start;
    width: unset;
  }
`;

const RemainPoints = styled.p`
  color: white;
  font-family: 'Noto Sans TC';
  font-size: 1.3em;

  & span {
    font-size: 1.5em;
    margin-left: 10px;
  }
`;
