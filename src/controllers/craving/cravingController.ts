import * as cravingService from '../../services/craving/cravingService';


export const getCravingByIdController= async (req : any, res : any) =>{

    const { id } = req.params

    try {
        const craving = await cravingService.getCravingByIdService(id);

        if(craving){
            res.send(craving);
        }else{
            res.code(404).send({message : 'Craving Not Found'})
        }
    } catch (error : any) {
        res.code(500).send({message : 'Internal Server Error', error : error.message})
    }
}

export const getAllCravingController = async (req : any, res : any) =>{
    
    try {
        
        const allCraving = await cravingService.getAllCravingService();

        if(allCraving){
            res.send(allCraving);
        }else{
            res.code(404).send({message : 'There are no cravings registered'})
        }
    } catch (error : any) {
        res.code(500).send({message : 'Internal Server Error', error : error.message})
    }
}

export const createCravingController = async (req : any, res : any) =>{
 
    const { description } = req.body

    try {
        
        const newCraving = await cravingService.createCravingService({description});
        res.code(201).send(newCraving);
    } catch (error : any) {
        res.code(500).send({message : 'Internal Server Error', error : error.message})
    }
}