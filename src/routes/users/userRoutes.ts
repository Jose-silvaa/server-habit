import { getUserByIdSessionController, getUserByIdController, createUserController } from "../../controllers/user/userController";

export const userRoutes = (fastify: any)=>{
    
    fastify.get('/users/:id', getUserByIdController);
    fastify.get('/session/:id', getUserByIdSessionController)
    fastify.post('/users', createUserController);

}

