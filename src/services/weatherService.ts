import axios from 'axios';

const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export const fetchWeather = async (cityOrCoords: string | { lat: number; lon: number }) => {
  try {
    let currentWeatherResponse;
    let forecastResponse;

    
    if (typeof cityOrCoords === 'string') {
     
      currentWeatherResponse = await weatherApi.get('weather', {
        params: {
          q: cityOrCoords,  
          appid: '515813fb3ff033a076eaa3b32540d7fa',  
          units: 'metric',
        },
      });

      forecastResponse = await weatherApi.get('onecall', {
        params: {
          lat: currentWeatherResponse.data.coord.lat,
          lon: currentWeatherResponse.data.coord.lon,
          appid: '515813fb3ff033a076eaa3b32540d7fa', 
          units: 'metric',
          exclude: 'current,minutely,hourly',
        },
      });
    } else {
      
      currentWeatherResponse = await weatherApi.get('weather', {
        params: {
          lat: cityOrCoords.lat,  
          lon: cityOrCoords.lon,  
          appid: '515813fb3ff033a076eaa3b32540d7fa',  
          units: 'metric',
        },
      });

      forecastResponse = await weatherApi.get('onecall', {
        params: {
          lat: cityOrCoords.lat,
          lon: cityOrCoords.lon,
          appid: '515813fb3ff033a076eaa3b32540d7fa',  
          units: 'metric',
          exclude: 'current,minutely,hourly',
        },
      });
    }

    return { currentWeather: currentWeatherResponse.data, forecast: forecastResponse.data.daily };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error('Error fetching weather data');
  }
};