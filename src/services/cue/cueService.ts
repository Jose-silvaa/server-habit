import * as cueModel from "../../models/cue/cueModel"

export const getCueByIdService = async (id : any) =>{
    return await cueModel.getCueById(id);
}

export const getAllCuesService = async () =>{
    return await cueModel.getAllCues();
}

export const createCueService = async (data: any) =>{
    return await cueModel.createCue(data)
}

