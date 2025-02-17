import { FastifyReply, FastifyRequest } from "fastify";
import * as rewardService from "../../services/reward/rewardService"

interface RewardProps {
    id : string
}

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


export const getRewardByIdController = async(req : FastifyRequest<{Params : RewardProps}>, res : FastifyReply) =>{

    const { id } = req.params

    try {
        
        const reward = await rewardService.getRewardByIdService(id);

        if(!reward){
            res.code(404).send({message : "Reward not found"})
        }

        res.code(200).send(reward)
    } catch (error : any) {
        res.code(500).send({message : 'Internal Server Error', error : error.message})
    }
}