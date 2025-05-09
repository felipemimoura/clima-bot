import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import axios from 'axios';

export class Chatbot {
  constructor() {
    this.state = 'start';
    this.rl = readline.createInterface({ input, output });
  }

  async start() {
    console.log('👋 Olá! Bem-vindo ao Chatbot do Clima!');
    console.log('\nO que você deseja fazer?');
    console.log('[1] Consultar clima');
    console.log('[2] Sair');
    const option = await this.rl.question('Escolha uma opção: ');

    if (option === '1') {
      // Perguntar a cidade
      const city = await this.rl.question('Digite o nome da cidade: ');

      //Buscar coordernadas

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

      //Buscar temperatura
      const r = await axios.get('https://api.open-meteo.com/v1/forecast', {
        params: {
          latitude: lat,
          longitude: lon,
          current_weather: true
        }
      });
      const temperature = r.data.current_weather?.temperature;

      console.log(temperature);
    } else if (option === '2') {
      console.log('Ate mais');
      this.rl.close();
      process.exit();
    } else {
      console.log('Opção Invalida');
    }
    return option;
  }
}
