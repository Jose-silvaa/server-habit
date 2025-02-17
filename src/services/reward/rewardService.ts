import * as rewardModel from "../../models/reward/rewardModel" 

export const readAllRewardService = async ()=>{
    return rewardModel.readAllReward();
}

export const getRewardByIdService = async (id : string)=>{
    return rewardModel.getRewardByIdService(id)
}