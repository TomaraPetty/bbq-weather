import React from 'react';
import { WeatherData } from '../app/page';

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
  const bbqEvaluator = currentWeather
    ? weather?.list.filter((weather) => {
        const tempF = cToF(weather.main.temp);
        return tempF > 60 && tempF < 85;
      })
    : [];
  const bbqDays = currentWeather ? bbqEvaluator?.length : 0;
  try {
    if (!city) {
      return (
        <div className="w-3/5 mx-auto flex flex-col items-center text-center text-white/90 text-xl bg-white/10 p-4 rounded-lg gap-6">
          <p>Select a city to see weather details.</p>
        </div>
      );
    }
    if (loading) {
      return (
        <div className="w-3/5 mx-auto flex flex-col items-center text-center text-white/90 text-xl bg-white/10 p-4 rounded-lg gap-6">
          <p>Loading weather data...</p>
        </div>
      );
    }
    if (error) {
      return (
        <div className="w-3/5 mx-auto flex flex-col items-center text-center text-white/90 text-xl bg-white/10 p-4 rounded-lg gap-6">
          <p>Error: {error}</p>
        </div>
      );
    }
    if (currentWeather) {
      return (
        <div className="w-3/5 mx-auto flex flex-col items-center text-center text-white/90 text-xl bg-white/10 p-4 rounded-lg gap-6">
          <p>
            {bbqDays > 0 ? (
              <>
                Holy smokes! <br />
                You can grill {bbqDays} days this week. Get ready to fire up that grill.
              </>
            ) : (
              "Unfortunately, this week is not great for grilling. There's always next week. Come back and check again soon!"
            )}
          </p>
          <p>
            The weather in {city} is currently{' '}
            {Math.round(cToF(currentWeather.main.temp))}&deg;F with {currentWeather.weather[0].description}.
          </p>
          <p className="mt-2">
            Feels like {Math.round(cToF(currentWeather.main.feels_like))}&deg;F
          </p>
        </div>
      );
    }
  } catch (e) {
    console.error(e);
  }
  return (
    <div className="w-3/5 mx-auto flex flex-col items-center text-center text-white/90 text-xl bg-white/10 p-4 rounded-lg gap-6">
      <p>
        That might not have been a proper city name. Please check your spelling and try again.
      </p>
    </div>
  );
}
function cToF(temp: number) {
  return (temp * 9) / 5 + 32;
}
