import { useState, useEffect, useRef } from 'react';
import { getHeroProfile, patchHeroProfile } from '../api/index';
import PropTypes from 'prop-types';

useStatistics.propTypes = {
  heroId: PropTypes.number,
};

export default function useStatistics(heroId) {
  const totalPoints = useRef(0);
  const [statistics, setStatistics] = useState([]);
  const [remainPoints, setRemainPoints] = useState(0);

  useEffect(() => {
    getHeroProfile(heroId).then((data) => {
      setStatistics(data);
      totalPoints.current = sum(data);
    });
  }, [heroId]);

  useEffect(() => {
    function calculateRemainPoints() {
      const currentPoints = sum(statistics);
      return totalPoints.current - currentPoints;
    }
    setRemainPoints(calculateRemainPoints());
  }, [statistics]);

  function save() {
    return new Promise((res, rej) => {
      patchHeroProfile(heroId, statistics).then((resultOk) => res(resultOk));
    });
  }

  function sum(statistics) {
    return Object.values(statistics).reduce((acc, cur) => acc + cur, 0);
  }

  function increment(key) {
    if (remainPoints === 0) return;
    setStatistics({
      ...statistics,
      [key]: statistics[key] + 1,
    });
  }
  function decrement(key) {
    if (statistics[key] === 0) return;
    setStatistics({
      ...statistics,
      [key]: statistics[key] - 1,
    });
  }

  return { statistics, increment, decrement, save, remainPoints };
}
