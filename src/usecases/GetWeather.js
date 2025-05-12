import { NominatimAPI } from '../infra/apis/NominatimAPI.js';
import { OpenMeteoAPI } from '../infra/apis/OpenMeteoAPI.js';

export class GetWeather {
  constructor() {
    this.geoApi = new NominatimAPI();
    this.weatherApi = new OpenMeteoAPI();
  }
  async execute(city) {
    const { lat, lon } = await this.geoApi.getCoordinates(city);

    const { temperature } = await this.weatherApi.getWeather(lat, lon);

    return { city: city, temperature };
  }
}
