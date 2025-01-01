import { createCravingController, getAllCravingController, getCravingByIdController } from "../../controllers/craving/cravingController";


export const cravingRoutes = (fastify : any) =>{

    fastify.get('/craving/:id', getCravingByIdController)//OK
    fastify.get('/craving/all', getAllCravingController)//OK
    fastify.post('/craving', createCravingController)
}