import { FastifyRequest } from 'fastify/types/request';
import * as userService from '../../services/userService'
import { FastifyReply } from 'fastify';

export const getUserByIdController = async (req:any, res:any) => {
    const { id } = req.params;

    try {
      const user = await userService.getUserByIdService(id);
      if (user) {
        res.send(user);
      } else {
        res.code(404).send({ message: 'User not found' });
      }
    } catch (error: any) {
      res.code(500).send({ message: 'Internal Server Error', error : error.message});
    }
  };
  
export const createUserController = async (req: FastifyRequest, res: FastifyReply) => {

    const { name, email, password } = req.body as { name: string; email: string; password: string };
    
    if (!name || !email || !password) {
      return res.code(400).send({ message: 'All fields are required: name, email, password' });
    }

    try {

      const validateEmail = await userService.verifyEmailUserService(email);

      if(validateEmail){
        res.code(400).send({message : 'Email Already registred'})
      }

      const hashedPassword = await req.server.bcrypt.hash(password);

      const newUser = await userService.createUserService({ name, email, password : hashedPassword});
      res.code(201).send(newUser);
    } catch (error: any) {
      res.code(500).send({ message: 'An error occurred while creating the user' , error : error.message});
    }
};

export const loginUserController = async(req : FastifyRequest, res: FastifyReply) =>{

  const { email, password } = req.body as { email: string; password: string };

    
  if (!email || !password ) {
    return res.code(400).send({ message: 'All fields are required: email, password' });
  }

  try {
    
    const validateUser = await userService.verifyEmailUserService(email);

    if (!validateUser) {
      return res.code(404).send({ message: 'User not found' });
    }

    if (!validateUser.password) {
      return res.code(400).send({ message: 'Password not set for user' });
    }

    const isPasswordValid = await req.server.bcrypt.compare(password, validateUser.password);

    if (!isPasswordValid) {
      return res.code(401).send({ message: 'Password is incorrect' });
    }

    return res.code(200).send(validateUser)

  } catch (error: any) {
    
    return res.code(500).send({
      message: 'Internal Server Error',  
      error: error.message || 'An unexpected error occurred',  
    });
  }

}
