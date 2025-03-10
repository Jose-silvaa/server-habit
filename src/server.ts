import fastify from 'fastify'
import { userRoutes } from './routes/users/userRoutes';
import { cueRoutes } from './routes/cue/cueRoutes';
import { cravingRoutes } from './routes/craving/cravingRoutes';
import { feedbackRoutes } from './routes/feedback/feedbackRoute';
import { routineRoutes } from './routes/routine/routineRoutes';
import fastifyBcrypt from 'fastify-bcrypt';
import fastifyCors from '@fastify/cors';
import { rewardRoutes } from './routes/reward/rewardRoutes';
import { habitRoutes } from './routes/habit/habitRoutes';
import { scheduleDaysRoutes } from './routes/scheduleDays/scheduleDaysRoutes';




const server = fastify();

server.register(fastifyBcrypt, {
  saltWorkFactor : 12
})
server.register(userRoutes);
server.register(cueRoutes);
server.register(feedbackRoutes)
server.register(cravingRoutes)
server.register(routineRoutes)
server.register(scheduleDaysRoutes)
server.register(habitRoutes)
server.register(rewardRoutes)
server.register(fastifyCors, {
  origin : true
})


const start = async () => {
    try {
      await server.listen({
        host: '0.0.0.0',
        port: process.env.PORT ? Number(process.env.PORT) : 3333,
      });
      console.log('Server Running');
    } catch (err) {
      console.error('Error starting the server:', err);
      process.exit(1);
    }
  };
  
  start();