import { createFeedBackController, getAllFeedbacksController } from "../../controllers/feedback/feedBackController"


export const feedbackRoutes = (fastify : any) =>{

    fastify.post('/feedback',  createFeedBackController)
    fastify.get('/feedback/all', getAllFeedbacksController)

}