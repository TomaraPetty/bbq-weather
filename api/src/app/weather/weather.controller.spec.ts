import { Test } from '@nestjs/testing';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

describe('WeatherController', () => {
  let controller: WeatherController;
  let service: WeatherService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [WeatherController],
      providers: [WeatherService],
    }).compile();

    controller = module.get<WeatherController>(WeatherController);
    service = module.get<WeatherService>(WeatherService);
  });

  it('should return weather forecast for a city', async () => {
    const mockWeather = {
      list: [
        {
          dt: 1748833200,
          main: { temp: 20 },
          weather: [{ description: 'broken clouds' }],
        },
      ],
    };
    // mock getWeatherForecast returns test data
    jest.spyOn(service, 'getWeatherForecast').mockResolvedValue(mockWeather);
    const result = await controller.getForecast('denver');
    // verify controller returns mocked data
    expect(result).toEqual(mockWeather);
    // verify the service was called with correct city parameter
    expect(service.getWeatherForecast).toHaveBeenCalledWith('denver');
  });
});
