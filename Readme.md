# 🌤️ ClimaBot - Chatbot de Clima via Terminal

Um chatbot funcional em Node.js que permite ao usuário interagir via terminal para consultar a temperatura atual de qualquer cidade do mundo, com base em uma **máquina de estados simples**, arquitetura **Clean Architecture**, e **observabilidade com Pino**.

---

## 🚀 Funcionalidades

- 🤖 Interface interativa via terminal (CLI)
- 🧠 Máquina de estados com transições claras
- 🌍 Consulta de clima atual via [Open-Meteo](https://open-meteo.com/)
- 📍 Busca de coordenadas por nome da cidade via [Nominatim](https://nominatim.org/)
- 🔁 Opções após consulta: nova cidade, voltar ao menu ou sair
- 🧼 Arquitetura limpa e testável (Clean Architecture)
- 📊 Monitoramento e logs com [Pino](https://getpino.io/)

---

## 📁 Estrutura do Projeto

src/</br>
├── application/</br>
├── domain/ # Entidades e regras de negócio</br>
├── infra/ # Acesso a APIs externas <br>
├── interface/cli/ # Interface CLI (usuário) <br>
├── shared/ # Utilitários como logger <br>

---

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/felipemimoura/clima-bot
cd clima-bot
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o Chatbot

```baseh
npm start
```

Você verá:

```
👋 Olá! Bem-vindo ao Chatbot do Clima!
O que você deseja fazer?
[1] Consultar clima
[2] Sair
```

## Requisitos Atendidos

✅ CLI interativo com perguntas e respostas

✅ Máquina de estados com controle de fluxo

✅ API pública de clima (Open-Meteo)

✅ Arquitetura limpa e modular

✅ Logs estruturados com Pino

✅ Entrada robusta e tratamento de erros

## 🔍 Observabilidade

Este projeto usa Pino para log estruturado:

Logs de info, erro e falhas globais

Saída formatada no terminal (via pino-pretty)

## 📦 Scripts úteis

| Comando          | Descrição                     |
| ---------------- | ----------------------------- |
| `npm start`      | Inicia o chatbot              |
| `npm run lint`   | Roda o ESLint                 |
| `npm run format` | Formata o código com Prettier |

# 📄 Licença

Este projeto está licenciado sob a MIT License.
