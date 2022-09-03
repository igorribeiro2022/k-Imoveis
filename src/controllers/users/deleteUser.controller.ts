import { Request, Response } from "express";
import deleteUserService from "../../services/users/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteUserService(id);

    return res.status(204).send();
  } catch (err) {
    if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });  
    }
    };
}

export default deleteUserController;
