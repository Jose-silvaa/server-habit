import { createCueController, getAllCuesController, getCueByIdController } from "../../controllers/cue/cueController";


export const cueRoutes = (fastify: any)=>{

    fastify.get('/cue/:id', getCueByIdController);//OK
    fastify.get('/cue/all', getAllCuesController)//OK
    fastify.post('/cue', createCueController);//OK

}