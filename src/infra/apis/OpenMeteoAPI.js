import axios from 'axios';
import { logger } from '../../shared/logger.js';

export class OpenMeteoAPI {
  async getWeather(lat, lon) {
    logger.info(
      `Iniciando consulta das temperatura com base na latitude ${lat} e longitude: ${lon}`
    );

    const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude: lat,
        longitude: lon,
        current_weather: true
      }
    });
    const temperature = response.data.current_weather?.temperature;
    logger.info(`Retorno da temperatura da cidade buscada ${temperature}`);
    return { temperature };
  }
}
