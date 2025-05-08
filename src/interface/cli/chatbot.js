import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

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
