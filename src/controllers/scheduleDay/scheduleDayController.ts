import { FastifyReply, FastifyRequest } from "fastify"
import * as scheduleService from "../../services/scheduleDay/scheduleDayService"


interface scheduleDay {
    id : string
}

export const getAllScheduleDaysController = async(req : FastifyRequest, res : FastifyReply)=>{
    
    try {
        const getAllScheduleDays = await scheduleService.getAllScheduleDaysService();

        if(getAllScheduleDays.length == 0){
            res.code(404).send({message : "There's no Schedule Days registred"})
        }

        res.code(200).send(getAllScheduleDays);

    } catch (error: any) {
        res.code(500).send({message: 'Internal Server Error',  error: error.message || 'An unexpected error occurred'})
    }

}


export const getScheduleDayByIdController = async (req : FastifyRequest<{Params : scheduleDay}>, res : FastifyReply) =>{

    const { id } = req.params

    try {
        const scheduleDay = await scheduleService.getScheduleDayById(id);
        
        if(!scheduleDay){
            res.code(404).send({message : "Schedule day not found"})
        }

        res.code(200).send(scheduleDay);

    } catch (error: any) {
        res.code(500).send({message: 'Internal Server Error',  error: error.message || 'An unexpected error occurred'})
    }
}


