import { createFeedBackController } from "../../controllers/feedback/feedBackController"


export const feedbackRoutes = (fastify : any) =>{

    fastify.post('/feedback',  createFeedBackController)

}