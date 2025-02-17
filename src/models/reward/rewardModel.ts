import prisma from "../../db/client";

export const createReward = async(data : any) =>{
    return await prisma.reward.create({
        data,
    })
}

export const getRewardByIdService = async (id : any)=>{
    return await prisma.reward.findUnique({
        where : {id}
    })
}

export const readAllReward = async () =>{
    return await prisma.reward.findMany();
}

export const updateReward = async (id : string, data : any) =>{
    return await prisma.reward.update({
        where : { id } ,
        data
    })
}

export const deleteReward = async(id : string) =>{
    return await prisma.reward.delete({
        where : {id}
    })
}

