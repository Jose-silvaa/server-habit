import { FastifyReply, FastifyRequest } from "fastify";
import * as rewardService from "../../services/reward/rewardService"

export const readAllRewardController = async (req : FastifyRequest, res : FastifyReply) =>{

    try {
        const readAllReward = await rewardService.readAllRewardService()

        if(readAllReward.length == 0){
            res.code(404).send({ message : "There are no rewards registered."})
        }else{
            res.code(200).send(readAllReward)
        }
    } catch (error) {
        res.code(500).send({message : "An error occurred"})

    }
}