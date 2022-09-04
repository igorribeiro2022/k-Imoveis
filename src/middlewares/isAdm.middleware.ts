import { NextFunction, Request, Response } from "express";

async function isAdmMiddleware (req: Request, res: Response, next: NextFunction) {
  const {isAdm} = req.user

  if (!isAdm) {
    return res.status(403).json({message: "User is not admin"})
  }

  next()
};

export default isAdmMiddleware;