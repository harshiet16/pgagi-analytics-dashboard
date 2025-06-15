import axios from 'axios';

const API_KEY = '515813fb3ff033a076eaa3b32540d7fa'; // API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const fetchWeather = async (city: string) => {
  try {
    // Fetch current weather data based on city name
    const response = await axios.get(
      `${BASE_URL}weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const currentWeather = response.data;
    console.log('Current Weather:', currentWeather); // Log the response for debugging

    // You can choose to return only the weather data for the city (no forecast)
    return { currentWeather };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error('Error fetching weather data');
  }
};
