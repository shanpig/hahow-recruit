import { useState, useEffect } from 'react';
import { getHeroList } from '../api';

export default function useHeroes() {
  const [heroList, setHeroList] = useState([]);
  useEffect(() => {
    getHeroList().then((data) => {
      console.log(data);
      setHeroList(data);
    });
  }, []);
  return { heroList };
}
