import React, { useRef } from 'react';
import styled from 'styled-components';
import debounce from '../../utils/misc/debouce';
import PropTypes from 'prop-types';

const DEBOUNCE_TIME = 100;
const ANIMATION_TIME = 200;

StatisticBar.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  operators: PropTypes.object,
  isMax: PropTypes.bool,
  isMin: PropTypes.bool,
};

export default function StatisticBar({ name, value, operators, isMax, isMin }) {
  const TEXTREF = useRef(null);
  const { increment, decrement } = operators;

  const debouncedIncrementHandler = debounce(() => {
    animateText(TEXTREF.current, 'up');
    increment();
  }, DEBOUNCE_TIME);

  const debouncedDecrementHandler = debounce(() => {
    animateText(TEXTREF.current, 'down');
    decrement();
  }, DEBOUNCE_TIME);

  function animateText(textElement, animateDirection) {
    if (isAnimating(textElement)) return;

    startAnimation(textElement, animateDirection);
    setTimeout(() => {
      endAnimation(textElement, animateDirection);
    }, ANIMATION_TIME);
  }

  function isAnimating(element) {
    return element.className.includes('animated');
  }

  function startAnimation(element, animateDirection) {
    element.classList.add('animated', animateDirection);
  }

  function endAnimation(element, animateDirection) {
    element.classList.remove('animated', animateDirection);
  }

  return (
    <Bar>
      <Name>{name.toUpperCase()}</Name>
      <Control>
        <Increment onClick={debouncedIncrementHandler} disabled={isMax}>
          +
        </Increment>
        <Value ref={TEXTREF}>{value}</Value>
        <Decrement onClick={debouncedDecrementHandler} disabled={isMin}>
          -
        </Decrement>
      </Control>
    </Bar>
  );
}

const Bar = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media screen and (max-width: 450px) {
    font-size: 10pt;
    justify-content: space-between;
  }
`;

const Name = styled.div`
  max-width: 60px;
  height: 1.2em;
  flex: 1 1 40px;
  font: bold 1.2em 'Avenger';
  letter-spacing: 2px;
  text-align: center;
`;

const Control = styled.div`
  max-width: 300px;
  flex: 6 3;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  transition: all ease 0.3s;
  background-color: rgba(255, 255, 255, 0.3);
  clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%);

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const ControlButton = styled.button`
  width: 2em;
  background: none;
  border: none;
  padding: 0 5px;
  font: bold 1.5em 'Noto Sans TC';
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
  font: 1.2em 'Avenger';

  &.animated {
    transition: text-shadow ${ANIMATION_TIME}ms ease;
    &.up {
      text-shadow: 0 -30px rgba(0, 0, 0, 0);
    }
    &.down {
      text-shadow: 0 30px rgba(0, 0, 0, 0);
    }
  }
`;

const Increment = styled(ControlButton)``;
const Decrement = styled(ControlButton)``;
