import { FastifyReply, FastifyRequest } from "fastify";
import * as routineService from '../../services/routine/routineService'


interface Params {
    id : string
}

export const createRoutineController = async(req : FastifyRequest, res : FastifyReply) =>{

    const { description } = req.body as { description : string}
    
    if(!description){
        return res.code(404).send({
            message : 'All fields are required: description',
        })
    }

    try{
        const newRoutine = await routineService.createRoutineService({description});
      
        res.code(201).send(newRoutine);
    } catch (error : any) {
        res.code(500).send({message : 'An error occurred while creating the Routine'})
    }
}

export const deleteRoutineController = async (req : FastifyRequest<{Params : Params}>, res : FastifyReply) =>{
    const { id } = req.params

    try {
        
        const routineExists = await routineService.getRoutineByIdService(id)

        if(!routineExists){
            res.code(404).send({message : "Routine doesn't exist "})
        }

        const deletedRoutine = await routineService.deleteRoutineService(id);

        if(deletedRoutine){
            res.code(200).send({message : "Routine was deleted"})
        }

    } catch (error) {
        res.code(500).send({message : "An error occurred while deleting the Routine"})
    }
}

export const readAllRoutinesController  = async (req : FastifyRequest, res : FastifyReply) =>{

    try {
        
        const readAllRoutines = await routineService.readAllRoutinesService();

        if(readAllRoutines.length == 0){
            res.code(404).send({ message : "there are no rotuines registered."})
        }else{
            res.code(200).send(readAllRoutines)
        }
    } catch (error) {
        res.code(500).send({message : "An error occurred"})

    }
}