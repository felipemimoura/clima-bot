import axios from 'axios';
import { logger } from '../../shared/logger.js';

export class NominatimAPI {
  async getCoordinates(city) {
    logger.info(`Iniciando consulta para busca da cidade: ${city}`);
    const response = await axios.get(
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

    if (!response.data[0]) {
      throw new Error('Cidade não encontra');
    }
    const { lat, lon } = response.data[0];
    logger.info(
      `Retorno da latitude: ${lat} e longitude: ${lon} da cidade de ${city}`
    );

    return { lat, lon };
  }
}
