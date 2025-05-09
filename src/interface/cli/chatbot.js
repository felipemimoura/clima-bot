import { stdin as input, stdout as output } from 'process';
import readline from 'readline/promises';
import { GetWeather } from '../../usecases/GetWeather.js';

export class Chatbot {
  constructor() {
    this.state = 'start';
    this.rl = readline.createInterface({ input, output });
  }

  async start() {
    const option = await this.buildMenu();

    if (option === '1') {
      // Perguntar a cidade
      await this.consultWeather();
    } else if (option === '2') {
      console.log('Ate mais');
      this.rl.close();
      process.exit();
    } else {
      console.log('Opção Invalida');
    }
    return option;
  }

  async buildMenu() {
    console.log('👋 Olá! Bem-vindo ao Chatbot do Clima!');
    console.log('\nO que você deseja fazer?');
    console.log('[1] Consultar clima');
    console.log('[2] Sair');
    return await this.rl.question('Escolha uma opção: ');
  }

  async consultWeather() {
    const city = await this.rl.question('Digite o nome da cidade: ');
    const usecase = new GetWeather();

    try {
      const result = await usecase.execute(city);
      console.log(
        `A temperatura em ${result.city} é de ${result.temperature} °C`
      );
    } catch (err) {
      console.log(err);
    }

    //Buscar temperatura
  }
}
