'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import CityDialog from './components/CityDialog';
import Hero from './components/Hero';
import WeatherDisplay from './components/WeatherDisplay';
import { Loader2 } from 'lucide-react';

export interface WeatherData {
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
  const [error, setError] = useState<string | null>();
  const [city, setCity] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/weather?city=${encodeURIComponent(city)}`
      );
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
    if (city) {
      fetchWeather(city);
    }
  }, [city]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 to-red-600">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <Hero />
          {!isOpen && (
            <Button
              disabled={loading}
              className="text-xl bg-white text-red-500 mb-6 hover:bg-white/90"
              onClick={() => setIsOpen(true)}
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                'Check Weather'
              )}
            </Button>
          )}
          {isOpen && (
            <CityDialog
              isOpen={isOpen}
              onOpenChange={setIsOpen}
              onSave={setCity}
            />
          )}
          <WeatherDisplay
            loading={loading}
            error={error}
            weather={weather}
            city={city}
          />
        </div>
      </div>
    </div>
  );
}
