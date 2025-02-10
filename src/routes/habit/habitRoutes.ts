import { createHabit, getAllHabitsController, getHabitByIdController, markHabitAsCompletedController } from "../../controllers/habit/habitController"


export const habitRoutes = (fastify: any)=>{
    
    fastify.get('/habit/:id', getHabitByIdController)
    fastify.get('/habit/all', getAllHabitsController)
    fastify.post('/habit', createHabit);
    fastify.post('/habit/mark', markHabitAsCompletedController)
}

