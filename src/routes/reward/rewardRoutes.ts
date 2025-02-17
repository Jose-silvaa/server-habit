import { getRewardByIdController, readAllRewardController } from "../../controllers/reward/rewardController"

export const rewardRoutes = (fastify : any) =>{

    fastify.get("/reward/all", readAllRewardController)
    fastify.get("/reward/:id", getRewardByIdController)
}