import axios from 'axios';

export class NominatimAPI {
  async getCoordinates(city) {
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
    return { lat, lon };
  }
}
