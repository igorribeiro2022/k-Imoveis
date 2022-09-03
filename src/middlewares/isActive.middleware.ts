import { NextFunction, Request, Response } from "express";

async function isActiveMiddleware (req: Request, res: Response, next: NextFunction) {
  const {isActive} = req.body

  if (!isActive) {
    return res.status(403).json({message: "User is not active"})
  }

  next()
};

export default isActiveMiddleware;