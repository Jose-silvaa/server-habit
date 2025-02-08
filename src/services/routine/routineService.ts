import * as routineModel from "../../models/routine/routineModel"


export const createRoutineService = async (description : any) =>{
    return await routineModel.createRoutine(description);
}

export const readAllRoutinesService = async ()=>{
    return await routineModel.readAllRoutines();
}

export const updateRoutineService = async (id : string, data : any) =>{
    return await routineModel.updateRoutine(id, data);
}

export const deleteRoutineService = async (id : string) =>{
    return await routineModel.deleteRoutine(id);
}

export const getRoutineByIdService = async (id : string) =>{
    return await routineModel.getRoutineById(id);
}