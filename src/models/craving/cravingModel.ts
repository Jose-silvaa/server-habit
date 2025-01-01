import prisma from "../../db/client";

export const getCravingById = async(id : any) =>{
    return await prisma.craving.findUnique({
        where : { id }
    })
}

export const getAllCraving = async () =>{
    return await prisma.craving.findMany();
}

export const createCraving = async (data : any) =>{
    return await prisma.craving.create({
        data,
    })
}