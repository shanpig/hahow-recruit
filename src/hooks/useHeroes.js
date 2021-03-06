import { useState, useEffect } from 'react';
import { getHeroList } from '../api';

export default function useHeroes() {
  const [heroList, setHeroList] = useState([]);

  useEffect(() => {
    getHeroList().then((data) => {
      setHeroList(data);
    });
  }, []);

  return { heroList };
}
