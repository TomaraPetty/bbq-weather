import { Controller, Get, Query, Logger } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  private readonly logger = new Logger(WeatherController.name);

  constructor(private readonly weatherService: WeatherService) {
  }

  @Get('forecast')
  async getForecast(
    @Query('city') city: string,
  ) {
    this.logger.log(`Received forecast request for city: ${city}`);
    return this.weatherService.getWeatherForecast(city);
  }
} 