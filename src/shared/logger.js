import pinoPretty from 'pino-pretty';
import pino from 'pino';
const stream = pinoPretty({
  colorize: true,
  translateTime: 'SYS:standard',
  ignore: 'pid,hostname'
});

export const logger = pino(stream);
