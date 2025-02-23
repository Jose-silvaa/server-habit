import prisma from "../../db/client";
import * as cueService from "../../services/cue/cueService"
import * as routineService from "../../services/routine/routineService"
import * as cravingService from "../../services/craving/cravingService"
import * as rewardService from "../../services/reward/rewardService"


export const bookedLastActivity = async (userId: any) => {

    return await prisma.user.update({
        where: { id: userId },
        data: { lastActivity: new Date() }
    })
}

export const getUserById = async (id: any) => {
    return await prisma.user.findUnique({
        where: { id },
        select: { id: true, name: true, email: true, createdAt: true }
    })
}

export const createUser = async (data: any) => {
    return await prisma.user.create({
        data,
    })
}

export const verifyEmailUsers = async (email: string) => {
    return await prisma.user.findUnique({
        where: { email },
        select: { email: true, password: true, id: true }
    })
}

export const getAllUsers = async () => {
    return await prisma.user.findMany();
}

export const getAllInformationRequired = async (cueId: string, routineId: string, rewardId: string, cravingId: string) => {
    const [cueName, rotuineName, cravingName, rewardName] = await Promise.all([
        cueService.getCueByIdService(cueId),
        routineService.getRoutineByIdService(routineId),
        cravingService.getCravingByIdService(cravingId),
        rewardService.getRewardByIdService(rewardId)
    ])

    return { cueName, rotuineName, cravingName, rewardName }
}