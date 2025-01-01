import prisma from "../../db/client";


export const getCueById = async(id : any) =>{
    return await prisma.cue.findUnique({
        where : {id}
    })
}


export const getAllCues = async ()=>{
    return await prisma.cue.findMany();
}

export const createCue = async (data: any)=>{
    return await prisma.cue.create({
        data,
    })
}

