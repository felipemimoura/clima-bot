import axios from 'axios';

export class GetWeather {
  async execute(city) {
    const cityData = await axios.get(
      'https://nominatim.openstreetmap.org/search',
      {
        params: {
          q: city,
          format: 'json',
          limit: 1
        },
        headers: { 'User-Agent': 'chatbot-clima' }
      }
    );

    if (!cityData.data[0]) {
      throw new Error('Cidade não encontra');
    }

    const { lat, lon } = cityData.data[0];

    const responseWeather = await axios.get(
      'https://api.open-meteo.com/v1/forecast',
      {
        params: {
          latitude: lat,
          longitude: lon,
          current_weather: true
        }
      }
    );
    const temperature = responseWeather.data.current_weather?.temperature;

    return { city: city, temperature };
  }
}
