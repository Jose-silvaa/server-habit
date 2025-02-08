import { getUserByIdController, createUserController, loginUserController, getAllUsersController } from "../../controllers/user/userController";

export const userRoutes = (fastify: any)=>{
    
    fastify.get('/users/:id', getUserByIdController);
    fastify.get('/users/all', getAllUsersController)
    fastify.post('/users', createUserController);
    fastify.post('/login', loginUserController)
}

