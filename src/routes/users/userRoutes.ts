import { getUserByIdController, createUserController } from "../../controllers/user/userController";

export const userRoutes = (fastify: any)=>{
    
    fastify.get('/users/:id', getUserByIdController);
    fastify.post('/users', createUserController);

}

