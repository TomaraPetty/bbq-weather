import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import WeatherDisplay from './WeatherDisplay';

// const mockWeather = {
//   list: [
//     {
//       dt: 1748833200,
//       main: { temp: 20 },
//       weather: [{ description: 'broken clouds' }],
//     },
//   ],
// };

describe('Weather display component', () => {
  it('should have select city text on the page when it loads', () => {
    render(
      <WeatherDisplay
        weather={null}
        loading={false}
        error={null}
        city={null}
      />,
    );
    const selectCity = screen.getByText('Select a city to see weather details.');
    expect(selectCity).toBeInTheDocument();
  });
});
