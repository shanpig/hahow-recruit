import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import StatisticBar from './StatisticBar';

StatisticsControl.propTypes = {
  statistics: PropTypes.shape({
    str: PropTypes.number,
    agi: PropTypes.number,
    luk: PropTypes.number,
    int: PropTypes.number,
  }),
  increment: PropTypes.func,
  decrement: PropTypes.func,
  remainPoints: PropTypes.number,
};

StatisticsControl.defaultProps = {
  statistics: {
    str: 10,
    agi: 10,
    luk: 10,
    int: 10,
  },
  increment: () => {},
  decrement: () => {},
  remainPoints: 0,
};

export default function StatisticsControl({
  statistics,
  increment,
  decrement,
  remainPoints,
}) {
  const statisticProps = Object.entries(statistics).map(([name, value]) => {
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
      {statisticProps.map((props, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <StatisticBar {...props} key={i} />
      ))}
    </Statistics>
  );
}

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
