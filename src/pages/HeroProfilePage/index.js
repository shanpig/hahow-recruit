import styled from 'styled-components';
import { useParams } from 'react-router';
import { PAGE_MAX_WIDTH } from '../../variables';
import useStat from '../../hooks/useStat';
import StatisticBar from '../../components/StatisticBar';

export default function HeroProfilePage() {
  const { heroId } = useParams();
  const { stat, increment, decrement, save, remainPoints } = useStat(heroId);

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
  background: linear-gradient(100deg, white 50%, rgb(255, 50, 50) 50%);
`;

const PageLeft = styled.div`
  flex-grow: 2;
`;

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PageRight = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const RemainPoints = styled.p``;
const SaveButton = styled.button``;
