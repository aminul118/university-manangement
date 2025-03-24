import mongoose from 'mongoose';
import app from './app';
import { config } from './config';
import { errorlogger, logger } from './shared/logger';
import { createServer, Server } from 'http';

process.on('uncaughtException', error => {
  errorlogger.error(error);
  process.exit(1);
});

let server: Server;
const serverStarts = async () => {
  try {
    await mongoose.connect(config.mongoURI as string);
    logger.info('🛢 Database connected');

    server = createServer(app).listen(config.port, () => {
      logger.info(`🚀 Server is running on port ${config.port}`);
    });
  } catch (error) {
    errorlogger.error('Failed to connect database', error);
    process.exit(1);
  }

  // Unhandleed Rejection Handle and smmothly off the server
  process.on('unhandledRejection', error => {
    console.log('Unhandle rejection ditected --> We are closing our server...');
    if (server) {
      server.close(() => {
        errorlogger.error('Unhandled Rejection:', error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
};

serverStarts();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
