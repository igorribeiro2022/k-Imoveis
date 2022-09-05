import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Users } from "../entities/user.entity";

async function isActiveMiddleware (req: Request, res: Response, next: NextFunction) {
  const {id} = req.params

  const usersRepository = AppDataSource.getRepository(Users);
  const user = await usersRepository.findOneBy({id: id});
  
  if (!user) {
    return res.status(404).json({message: "User not found"})
  }

  if (!user?.isActive) {
    return res.status(400).json({message: "Inactive user"})
  }

  next()
};

export default isActiveMiddleware;