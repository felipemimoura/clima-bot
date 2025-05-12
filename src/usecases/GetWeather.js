import axios from 'axios';
import { NominatimAPI } from '../infra/apis/NominatimAPI';

export class GetWeather {
  constructor() {
    this.geoApi = new NominatimAPI();
  }
  async execute(city) {
    const { lat, lon } = await this.geoApi.getCoordinates(city);

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
