// src/pages/weather.tsx
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Chart from '../components/Chart';
import { fetchWeather } from '../services/weatherService';

const WeatherPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null); 
  const [forecastData, setForecastData] = useState<any[]>([]);
  const [city, setCity] = useState<string>('Delhi'); 

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchWeather(city); 
        console.log('Fetched weather data:', data); 
        setWeatherData(data.currentWeather);
        setForecastData(data.forecast);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    getWeatherData();
  }, [city]); 

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const data = await fetchWeather({ lat: latitude, lon: longitude });
          setWeatherData(data.currentWeather);
          setForecastData(data.forecast);
        },
        (error) => {
          console.error('Geolocation error:', error);
        }
      );
    } else {
      console.error('Geolocation not supported by this browser');
    }
  };

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <Navbar />
        <h1 className="text-4xl font-bold mb-6">Weather Forecast</h1>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 bg-gray-700 text-white rounded-md"
          />
          <button
            onClick={handleGeolocation}
            className="ml-4 p-2 bg-blue-500 text-white rounded-md"
          >
            Use My Location
          </button>
        </div>

        {weatherData ? (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{weatherData.name}, {weatherData.sys.country}</h2>
            <p className="text-xl mb-2">Weather: {weatherData.weather[0].description}</p>
            <p className="text-xl mb-2">Temperature: {weatherData.main.temp}°C</p>
            <p className="text-xl mb-2">Humidity: {weatherData.main.humidity}%</p>
            <p className="text-xl mb-2">Pressure: {weatherData.main.pressure} hPa</p>
            <p className="text-xl mb-2">Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        ) : (
          <p className="text-xl text-gray-400">Loading current weather data...</p>
        )}

        <h2 className="text-2xl font-bold mb-4 mt-8">7-Day Forecast</h2>
        {forecastData.length > 0 ? (
          <Chart data={forecastData} dataKey="temp.day" xKey="dt" />
        ) : (
          <p className="text-xl text-gray-400">Loading 7-day forecast...</p>
        )}
      </div>
    </div>
  );
};

export default WeatherPage;
