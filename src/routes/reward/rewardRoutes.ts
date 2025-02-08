import { readAllRewardController } from "../../controllers/reward/rewardController"

export const rewardRoutes = (fastify : any) =>{

    fastify.get("/reward/all", readAllRewardController)
}