import * as userService from '../../services/userService'

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
  
export const createUserController = async (req:any, res:any) => {

    const { email, password } = req.body;

    try {
      const newUser = await userService.createUserService({ email, password });
      res.code(201).send(newUser);
    } catch (error: any) {
      res.code(500).send({ message: 'Internal Server Error' , error : error.message});
    }
};