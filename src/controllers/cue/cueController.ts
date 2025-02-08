import * as cueService from '../../services/cue/cueService';

export const getCueByIdController = async (req: any, res: any) =>{

    const { id } = req.params

    try {
        const cue = await cueService.getCueByIdService(id);

        if(cue){
            res.send(cue);
        }else{
            res.code(404).send({message : 'Cue not found'})
        }
    } catch (error: any) {
        res.code(500).send({message : 'Internal Server Error', error : error.message})
    }
}

export const getAllCuesController = async(req : any, res: any) =>{

    try {
        const allCues = await cueService.getAllCuesService();

        if(allCues.length == 0){
            res.code(404).send({message : 'There are no cues registered.'})
        }else{
            res.code(200).send(allCues)
        }
    } catch (error: any) {
        res.code(500).send({message : 'Internal Server Error', error : error.message})
    }
}

export const createCueController = async (req: any, res: any) =>{

    const { description } = req.body

    try {
        const newCue = await cueService.createCueService({description});
        res.code(201).send(newCue)
    } catch (error: any) {
        res.code(500).send({message : 'Internal Server Error', error : error.message})
    }
}