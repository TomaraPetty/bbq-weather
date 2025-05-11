import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  private readonly apiKey = process.env.OPENWEATHER_API_KEY;
  private readonly baseUrl = 'https://api.openweathermap.org/data/2.5';
  private readonly geoUrl = 'https://api.openweathermap.org/geo/1.0';

  private async getCoordinates(city: string) {
    try {
      const response = await axios.get(
        `${this.geoUrl}/direct?q=${encodeURIComponent(city)}&limit=1&appid=${this.apiKey}`
      );
      if (!response.data.length) {
        throw new Error('City not found');
      }
      return {
        lat: response.data[0].lat,
        lon: response.data[0].lon
      };
    } catch (error) {
      throw new Error('Failed to get city coordinates', { cause: error });
    }
  }

  async getWeatherForecast(city: string) {
    try {
      const { lat, lon } = await this.getCoordinates(city);
      const response = await axios.get(
        `${this.baseUrl}/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch weather data', { cause: error });
    }
  }
} 