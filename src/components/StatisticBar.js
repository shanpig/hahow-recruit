import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import debounce from '../utils/misc/debouce';

const DEBOUNCE_TIME = 300;

export default function StatisticBar({ name, value, operators, isMax, isMin }) {
  const TEXTREF = useRef(null);
  const { increment, decrement } = operators;

  function animateText(textElement, className) {
    if (textElement.className.includes('animated')) return;
    textElement.classList.add('animated', className);
    setTimeout(() => {
      textElement.classList.remove('animated', className);
    }, DEBOUNCE_TIME);
  }

  function incrementHandler() {
    const debouncedIncrement = debounce(() => {
      animateText(TEXTREF.current, 'up');
      increment();
    }, DEBOUNCE_TIME);
    debouncedIncrement();
  }

  function decrementHandler() {
    const debouncedDecrement = debounce(() => {
      animateText(TEXTREF.current, 'down');
      decrement();
    }, DEBOUNCE_TIME);
    debouncedDecrement();
  }

  return (
    <Bar>
      <Name>{name.toUpperCase()}</Name>
      <Control>
        <Increment onClick={incrementHandler} disabled={isMax}>
          +
        </Increment>
        <Value ref={TEXTREF}>{value}</Value>
        <Decrement onClick={decrementHandler} disabled={isMin}>
          -
        </Decrement>
      </Control>
    </Bar>
  );
}

const Bar = styled.div`
  font-size: 1.5em;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Name = styled.div`
  max-width: 60px;
  flex-basis: 40px;
  flex-grow: 1;
  flex-shrink: 1;
  font-family: 'Marvel';
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
`;

const Control = styled.div`
  max-width: 200px;
  flex-grow: 6;
  flex-shrink: 3;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.3);
  clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%);
`;

const ControlButton = styled.button`
  width: 2em;
  height: 1.5em;
  background: none;
  border: none;
  padding: 0 10px;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.7);
  clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%);

  &[disabled] {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:hover:not([disabled]) {
    cursor: pointer;
    background-color: white;
  }
`;
const Value = styled.div`
  flex-basis: 50px;
  max-width: 50px;
  min-width: 50px;
  text-align: center;
  text-shadow: 0 0 rgba(0, 0, 0, 0.7);

  &.animated {
    transition: text-shadow ${DEBOUNCE_TIME}ms ease;
    &.up {
      text-shadow: 0 -20px rgba(0, 0, 0, 0);
    }
    &.down {
      text-shadow: 0 20px rgba(0, 0, 0, 0);
    }
  }
`;

const Increment = styled(ControlButton)``;
const Decrement = styled(ControlButton)``;
