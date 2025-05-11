'use client';

import { useEffect, useState } from 'react';
import { Input } from '../../bbq_weather/components/ui/input';

interface WeatherData {
  list: Array<{
    dt: number;
    main: {
      temp: number;
      feels_like: number;
    };
    weather: Array<{
      main: string;
      description: string;
    }>;
  }>;
}

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState('Austin');
  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const currentWeather = weather?.list[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 to-red-600">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-[8rem] font-bold text-white mb-4">Check for BBQ weather</h1>
          <Input className="text-5xl font-bold text-white mb-4" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          {loading ? (
            <p className="text-xl text-white/90">Loading weather data...</p>
          ) : error ? (
            <p className="text-xl text-white/90">Error: {error}</p>
          ) : currentWeather ? (
            <div className="text-xl text-white/90">
              <p>
                The weather is currently {Math.round(currentWeather.main.temp)}&deg;C
                and {currentWeather.weather[0].description}
              </p>
              <p className="mt-2">
                Feels like {Math.round(currentWeather.main.feels_like)}&deg;C
              </p>
            </div>
          ) : (
            <p className="text-xl text-white/90">No weather data available</p>
          )}
        </div>
      </div>
    </div>
  );
}
