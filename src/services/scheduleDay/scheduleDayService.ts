import * as scheduleModel from "../../models/scheduleDay/sheduleDayModel"


export const getAllScheduleDaysService = async() =>{
    return await scheduleModel.getAllScheduleDays();
}

export const getScheduleDayById = async(id : string) =>{
    return await scheduleModel.getScheduleDayById(id);
}
