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
    let continueLoop = true;

    while (continueLoop) {
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

      const nextStep = await this.rl.question(
        '\nO que você deseja fazer agora?\n[1] Consultar outra cidade\n[2] Voltar ao menu principal\n[3] Encerrar\nEscolha uma opção: '
      );

      if (nextStep === '1') {
        continue;
      } else if (nextStep === '2') {
        continueLoop = false;
        this.start();
      } else if (nextStep === '3') {
        console.log('👋 Até logo!');
        this.rl.close();
        process.exit(0);
      } else {
        console.log('Opção inválida. Retornando ao menu principal...');
        continueLoop = false;
      }
    }
  }
}
