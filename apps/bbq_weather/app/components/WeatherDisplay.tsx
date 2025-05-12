import React from 'react';
import { WeatherData } from '../page';

interface WeatherDisplayProps {
  loading: boolean;
  error: string | null | undefined;
  weather: WeatherData | null;
  city: string | null;
}

export default function WeatherDisplay({
  loading,
  error,
  weather,
  city,
}: WeatherDisplayProps) {
  const currentWeather = weather?.list?.[0];
  try {
    if (!city) {
      return (
        <p className="text-xl text-white/90">
          Select a city to see weather details
        </p>
      );
    }
    if (loading) {
      return <p className="text-xl text-white/90">Loading weather data...</p>;
    }
    if (error) {
      return <p className="text-xl text-white/90">Error: {error}</p>;
    }
    if (currentWeather) {
      return (
        <div className="text-xl text-white/90">
          <p>
            The weather in {city} is currently{' '}
            {Math.round(currentWeather.main.temp)}
            &deg;C and {currentWeather.weather[0].description}
          </p>
          <p className="mt-2">
            Feels like {Math.round(currentWeather.main.feels_like)}&deg;C
          </p>
        </div>
      );
    }
  } catch (e) {
    console.error(e);
  }
  return (
    <>
      <p className="text-xl text-white/90">
        That might not have been a proper city name. Please try again but this
        time don&apos;t mess up.
      </p>
    </>
  );
}
