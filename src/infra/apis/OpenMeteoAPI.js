import axios from 'axios';
export class OpenMeteoAPI {
  async getWeather(lat, lon) {
    const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude: lat,
        longitude: lon,
        current_weather: true
      }
    });
    const temperature = response.data.current_weather?.temperature;
    return { temperature };
  }
}
