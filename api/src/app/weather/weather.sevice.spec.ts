import { Test } from '@nestjs/testing';
import { WeatherService } from './weather.service';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      providers: [WeatherService],
    }).compile();

    service = app.get<WeatherService>(WeatherService);
  });

  it('should return a weather forecast for a city', async () => {
    // Mock getCoordinates()
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        {
          lat: 39.7392,
          lon: -104.9849,
        },
      ],
    });
    // Mock weather forecast
    const mockWeather = {
      list: [
        {
          dt: 1748833200,
          main: { temp: 20 },
          weather: [{ description: 'broken clouds' }],
        },
      ],
    };
    mockedAxios.get.mockResolvedValueOnce({ data: mockWeather });

    const result = await service.getWeatherForecast('Denver');
    expect(result).toEqual(mockWeather);
  });
});
