import { createLogger, format, transports } from 'winston';
// import DailyRotateFile from 'winston-daily-rotate-file'
import DailyRotateFile from 'winston-daily-rotate-file';
import Path from 'path';
const { combine, timestamp, label, printf } = format;

//custom log format

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp as string);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${date.toDateString()}  ${hour} : ${minutes} : ${seconds} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'ph' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),

    new DailyRotateFile({
      filename: Path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'tabedge-%DATE%-success.log'
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

const errorlogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'right meow!' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: Path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'tabedge--%DATE%-error.log'
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

export { logger, errorlogger };
