import * as rewardModel from "../../models/reward/rewardModel" 

export const readAllRewardService = async ()=>{
    return rewardModel.readAllReward();
}
