import { useState, useEffect, useRef } from 'react';
import { getHeroProfile, patchHeroProfile } from '../api/index';

export default function useStat(heroId) {
  const totalPoints = useRef(0);
  const [stat, setStat] = useState([]);
  const [remainPoints, setRemainPoints] = useState(0);

  useEffect(() => {
    getHeroProfile(heroId).then((data) => {
      setStat(data);
      totalPoints.current = sum(data);
    });
  }, [heroId]);

  useEffect(() => {
    function calculateRemainPoints() {
      const currentPoints = sum(stat);
      return totalPoints.current - currentPoints;
    }
    setRemainPoints(calculateRemainPoints());
  }, [stat]);

  function save() {
    console.log(stat);
    patchHeroProfile(heroId, stat);
  }

  function sum(stat) {
    return Object.values(stat).reduce((acc, cur) => acc + cur, 0);
  }

  function increment(key) {
    if (remainPoints === 0) return;
    setStat({
      ...stat,
      [key]: stat[key] + 1,
    });
  }
  function decrement(key) {
    if (stat[key] === 0) return;
    setStat({
      ...stat,
      [key]: stat[key] - 1,
    });
  }

  return { stat, increment, decrement, save, remainPoints };
}
