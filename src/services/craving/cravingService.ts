import * as cravingModel from "../../models/craving/cravingModel"

export const getCravingByIdService = async (id : any) =>{
    return await cravingModel.getCravingById(id);
}

export const getAllCravingService = async () =>{
    return await cravingModel.getAllCraving();
}

export const createCravingService = async (data : any) =>{
    return await cravingModel.createCraving(data);
}