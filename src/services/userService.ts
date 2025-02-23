import * as userModel from '../models/user/userModel';

export const getUserByIdService = async (id: any) => {
    return await userModel.getUserById(id)
}

export const createUserService = async (userData: any) => {
    return await userModel.createUser(userData);
}

export const verifyEmailUserService = async (email: string) => {
    return await userModel.verifyEmailUsers(email);
}

export const getAllUsersService = async () => {
    return await userModel.getAllUsers();
}

export const bookedLastActivityService = async (userId: any) => {
    return await userModel.bookedLastActivity(userId);
}

export const getAllInformationRequiredService = async (cueId: string, routineId: string, rewardId: string, cravingId: string) => {
    return await userModel.getAllInformationRequired(cueId, routineId, rewardId, cravingId);
}