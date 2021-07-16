import styled from 'styled-components';
import { useParams } from 'react-router';
import { PAGE_MAX_WIDTH } from '../../variables';
import useStat from '../../hooks/useStat';

export default function HeroProfilePage() {
  const { heroId } = useParams();
  const { stat, increment, decrement, save, remainPoints } = useStat(heroId);

  return (
    <Page>
      <PageLeft>
        <Statistics>
          {Object.entries(stat).map(([key, val], i) => {
            return (
              <StatisticBar key={i}>
                <StatisticName>{key}</StatisticName>{' '}
                <StatisticControl>
                  <Increment
                    onClick={() => increment(key)}
                    disabled={remainPoints === 0}
                  >
                    +
                  </Increment>
                  <Value>{val}</Value>
                  <Decrement
                    onClick={() => decrement(key)}
                    disabled={val === 0}
                  >
                    -
                  </Decrement>
                </StatisticControl>
              </StatisticBar>
            );
          })}
        </Statistics>
      </PageLeft>
      <PageRight>
        <RemainPoints>剩餘點數 : {remainPoints}</RemainPoints>
        <SaveButton onClick={save}>儲存</SaveButton>
      </PageRight>
    </Page>
  );
}

const Page = styled.div`
  max-width: ${PAGE_MAX_WIDTH};
  padding: 10px 20px;
  margin: 0 auto;
  display: flex;
`;

const PageLeft = styled.div`
  flex-grow: 2;
`;

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StatisticBar = styled.div`
  font-size: 1.5em;
  display: flex;
`;

const StatisticName = styled.div`
  flex-basis: 40px;
  flex-grow: 1;
  flex-shrink: 1;
`;

const StatisticControl = styled.div`
  flex-grow: 6;
  flex-shrink: 3;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ControlButton = styled.button`
  width: 1.5em;
  height: 1.5em;
  border-radius: 5px;
`;
const Value = styled.div`
  flex-basis: 50px;
  max-width: 50px;
  min-width: 50px;
  text-align: center;
`;

const Increment = styled(ControlButton)``;
const Decrement = styled(ControlButton)``;

const PageRight = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const RemainPoints = styled.p``;
const SaveButton = styled.button``;
