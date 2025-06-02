import axios from 'axios';

describe('Test Weather Forecast API', () => {
  it('should return weather data for a city', async () => {
    const res = await axios.get(`http://localhost:5232/api/weather/forecast?city=denver`);
    const city = await res.data['city']['name']

    expect(res.status).toBe(200);
    expect(city).toEqual('Denver');
  });
});
