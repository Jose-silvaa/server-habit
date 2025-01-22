import * as userModel from '../models/userModel';

export const getUserByIdService = async (id:any) =>{
    return await userModel.getUserById(id)
}

export const createUserService = async (userData:any) => {
    return await userModel.createUser(userData);
}

export const verifyEmailUserService = async(email: string) =>{
    return await userModel.verifyEmailUsers(email);   
}