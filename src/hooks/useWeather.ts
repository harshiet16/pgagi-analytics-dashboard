import { useState, useEffect } from 'react';
import { fetchWeather } from '../services/weatherService';

const useWeather = (city: string) => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getWeather = async () => {
      try {
        setLoading(true);
        const data = await fetchWeather(city);
        setWeather(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [city]);

  return { weather, loading };
};

export default useWeather;
