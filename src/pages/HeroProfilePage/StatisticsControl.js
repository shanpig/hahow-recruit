import styled from 'styled-components';
import StatisticBar from './StatisticBar';
import PropTypes from 'prop-types';

StatisticsControl.propTypes = {
  statistics: PropTypes.object,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  remainPoints: PropTypes.number,
};

export default function StatisticsControl({
  statistics,
  increment,
  decrement,
  remainPoints,
}) {
  const statisticProps = Object.entries(statistics).map(([name, value], i) => {
    const operators = {
      increment: () => increment(name),
      decrement: () => decrement(name),
    };
    return {
      name,
      value,
      operators,
      isMax: remainPoints === 0,
      isMin: value === 0,
    };
  });

  return (
    <Statistics>
      {statisticProps.map((props) => (
        <StatisticBar {...props} />
      ))}
    </Statistics>
  );
}

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
