import * as feedBackService from "../../services/feedback/feedbackService"
import * as userService from "../../services/userService"
import { FastifyReply, FastifyRequest } from "fastify";


export const createFeedBackController = async(req: FastifyRequest, res : FastifyReply) =>{
        const { user_id, feedback } = req.body as { user_id: string; feedback: string };

        if (!user_id || !feedback) {
        return res.code(400).send({
            message: 'All fields are required: user_id, feedback',
        });
        }

        try {
        // Verificar se o usuário existe antes de prosseguir
        const user = await userService.getUserByIdService(user_id);

        if (!user) {
            return res.code(404).send({ message: 'User not found' });
        }

        // Criar o feedback se o usuário for encontrado
        const feedbackUser = await feedBackService.createFeedBackService(user_id, feedback);

        return res.code(201).send({
            message: 'Feedback sent successfully',
        });

        } catch (error: any) {
        // Tratar erros de forma mais clara
        console.error('Error creating feedback:', error); // Log de erro para facilitar debugging

        return res.code(500).send({
            message: 'Internal Server Error',
            error: error.message || 'Unknown error occurred', // Mensagem mais informativa
        });
        }

}