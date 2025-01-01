import fastify from 'fastify'
import { userRoutes } from './routes/users/userRoutes';
import { cueRoutes } from './routes/cue/cueRoutes';
import { cravingRoutes } from './routes/craving/cravingRoutes';

const server = fastify();

server.register(userRoutes);
server.register(cueRoutes);
server.register(cravingRoutes)

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