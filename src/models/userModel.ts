import prisma from "../db/client";


export const getUserById = async(id: any) =>{
    return await prisma.user.findUnique({
        where : {id}
    })
}

export const createUser = async (data: any) => {
    return await prisma.user.create({
        data,
    })
}

export const verifyEmailUsers = async(email : string) =>{
    return await prisma.user.findUnique({
        where : {email}
    })
}
