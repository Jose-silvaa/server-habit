import prisma from "../../db/client";

export const createRoutine = async(data : any)=>{
    return await prisma.routine.create({
        data,
    })
}

export const readAllRoutines = async () =>{
    return await prisma.routine.findMany();
}

export const updateRoutine = async (id : string, data : any) =>{
    return await prisma.routine.update({
        where : {id}, 
        data
    })
}

export const deleteRoutine = async (id : string) =>{
    return await prisma.routine.delete({
        where : {id}
    })
}

export const getRoutineById = async (id : string) =>{
    return await prisma.routine.findUnique({
        where : {id}
    })
}