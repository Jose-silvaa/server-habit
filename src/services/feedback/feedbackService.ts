import * as feedbackModel from "../../models/feedback/feedbackModel"

export const createFeedBackService = async (user_id : string, feedback : string)=>{
    return await feedbackModel.createFeedBack(user_id, feedback);
}