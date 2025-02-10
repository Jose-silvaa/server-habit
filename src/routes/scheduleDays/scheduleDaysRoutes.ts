import { getAllScheduleDaysController, getScheduleDayByIdController } from "../../controllers/scheduleDay/scheduleDayController"

export const scheduleDaysRoutes = async (fastify : any) =>{

    fastify.get("/scheduleDays/all", getAllScheduleDaysController)
    fastify.get("/scheduleDays/:id", getScheduleDayByIdController)
}