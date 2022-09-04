import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.service";
import { instanceToPlain } from "class-transformer";
import { AppError } from "../../errors/appError";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, isAdm } = req.body;

    const newUser = await createUserService({ name, email, password, isAdm });

    return res.status(201).json(instanceToPlain(newUser));
  } catch (err) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).send({
        message: err.message,
      });
    }
  }
};

export default userCreateController;
