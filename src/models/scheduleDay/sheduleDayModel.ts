import prisma from "../../db/client";


export const getAllScheduleDays = async()=>{
    return prisma.scheduledDay.findMany();
}

export const getScheduleDayById = async(id: string)=>{
    return prisma.scheduledDay.findUnique({
        where : {id}
    })
}

