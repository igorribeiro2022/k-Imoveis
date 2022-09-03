import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.service";
import { instanceToPlain } from "class-transformer";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, isAdm } = req.body;

    const newUser = await createUserService({ name, email, password, isAdm });

    return res.status(201).json(instanceToPlain(newUser));
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userCreateController;
