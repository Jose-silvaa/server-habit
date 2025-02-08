import prisma from "../../db/client";

export const createFeedBack = async (user_id: string, feedback : string) => {
    return await prisma.feedback.create({
        data : {
            feedback,
            userId : user_id 
        }
    })
}


export const getAllFeedbacks = async() =>{ 
    return await prisma.feedback.findMany();
}