import { getUserByIdController, createUserController, loginUserController, getAllUsersController, bookedLastActivityController, getAllInformationRequiredController } from "../../controllers/user/userController";

export const userRoutes = (fastify: any)=>{
    
    fastify.get('/users/:id', getUserByIdController);
    fastify.post('/users/details', getAllInformationRequiredController)
    fastify.get('/users/all', getAllUsersController)
    fastify.post('/users', createUserController);
    fastify.post('/login', loginUserController);
    fastify.put('/logout/:id', bookedLastActivityController)
}

