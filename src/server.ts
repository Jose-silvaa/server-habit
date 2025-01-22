import fastify from 'fastify'
import { userRoutes } from './routes/users/userRoutes';
import { cueRoutes } from './routes/cue/cueRoutes';
import { cravingRoutes } from './routes/craving/cravingRoutes';
import fastifyBcrypt from 'fastify-bcrypt';
import fastifyCors from '@fastify/cors';
import fs from 'fs'


const server = fastify({
  logger : true,
  https : {
      key : fs.readFileSync('./server.key'),
      cert : fs.readFileSync('./server.crt'),
  }
});

server.register(userRoutes);
server.register(cueRoutes);
server.register(cravingRoutes)
server.register(fastifyCors, {
  origin : true,
})

server.register(fastifyBcrypt, {
  saltWorkFactor : 12
})


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