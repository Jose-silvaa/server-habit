import prisma from "../../db/client";


export const getUserById = async(id: any) =>{
    return await prisma.user.findUnique({
        where : {id},
        select : { id: true, name : true, email : true, createdAt : true}
    })
}

export const createUser = async (data: any) => {
    return await prisma.user.create({
        data,
    })
}

export const verifyEmailUsers = async(email : string) =>{
    return await prisma.user.findUnique({
        where : {email},
        select : {email : true, password : true, id : true}
    })
}

export const getAllUsers = async() =>{
    return await prisma.user.findMany();
}