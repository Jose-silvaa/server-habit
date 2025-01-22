import prisma from "../db/client";


export const getUserById = async(id: any) =>{
    return await prisma.user.findUnique({
        where : {id}
    })
}

export const getUserByIdSession = async(session : any) =>{

    const user = await prisma.user.findUnique({
        where: {
          id: session, 
        },
        select :{
            name : true,
            email : true,
        }
      });

    if (!user) {
      throw new Error("User not found.");
    }
    
    return user;
    

    
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
