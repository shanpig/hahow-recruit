import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router';
import { PAGE_MAX_WIDTH } from '../../variables';
import useStat from '../../hooks/useStat';
import StatisticBar from '../../components/StatisticBar';

export default function HeroProfilePage() {
  const { heroId } = useParams();
  const [isSaving, setIsSaving] = useState(false);
  const { stat, increment, decrement, save, remainPoints } = useStat(heroId);

  function saveHandler() {
    setIsSaving(true);
    save().then((isOk) => {
      if (isOk) setIsSaving(false);
    });
  }

  return (
    <Page>
      <PageLeft>
        <Statistics>
          {Object.entries(stat).map(([name, value], i) => {
            const operators = {
              increment: () => increment(name),
              decrement: () => decrement(name),
            };
            return (
              <StatisticBar
                key={i}
                name={name}
                value={value}
                operators={operators}
                isMax={remainPoints === 0}
                isMin={value === 0}
              />
            );
          })}
        </Statistics>
      </PageLeft>
      <PageRight>
        <RemainPoints>
          剩餘點數 : <span>{remainPoints}</span>
        </RemainPoints>
        <SaveButton onClick={saveHandler}>
          {isSaving ? 'Saving...' : 'Save'}
        </SaveButton>
      </PageRight>
    </Page>
  );
}

const Page = styled.div`
  width: 100%;
  max-width: ${PAGE_MAX_WIDTH};
  padding: 10px 20px;
  /* margin: 0 auto; */
  display: flex;
  justify-content: space-around;
  /* background: linear-gradient(100deg, white 50%, rgb(255, 50, 50) 50%); */
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

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PageRight = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  @media screen and (max-width: 690px) {
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

const SaveButton = styled.button`
  min-width: fit-content;
  background-color: rgb(220, 0, 0);
  color: white;
  font-family: 'Avenger';
  font-weight: bolder;
  font-size: 1.6em;
  cursor: pointer;
  letter-spacing: 10px;
  text-indent: 5px;
  padding: 10px 20px;
  border: none;
`;
