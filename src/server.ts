import fastify from 'fastify'
import { userRoutes } from './routes/userRoutes';

const server = fastify();

server.register(userRoutes)

const start = async () => {
    try {
      await server.listen({
        host: '0.0.0.0',
        port: process.env.PORT ? Number(process.env.PORT) : 3333,
      });
      console.log('Serve Roda');
    } catch (err) {
      console.error('Error starting the server:', err);
      process.exit(1);
    }
  };
  
  start();