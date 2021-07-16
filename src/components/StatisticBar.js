import styled from 'styled-components';

export default function StatisticBar({ name, value, operators, isMax, isMin }) {
  const { increment, decrement } = operators;
  return (
    <Bar>
      <Name>{name}</Name>
      <Control>
        <Increment onClick={increment} disabled={isMax}>
          +
        </Increment>
        <Value>{value}</Value>
        <Decrement onClick={decrement} disabled={isMin}>
          -
        </Decrement>
      </Control>
    </Bar>
  );
}

const Bar = styled.div`
  font-size: 1.5em;
  display: flex;
`;

const Name = styled.div`
  flex-basis: 40px;
  flex-grow: 1;
  flex-shrink: 1;
`;

const Control = styled.div`
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
