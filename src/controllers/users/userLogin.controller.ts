import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import userLoginService from "../../services/users/userLogin.service";

const userLoginController = async (req: Request, res: Response) => {
try {
    const { email, password } = req.body;

    const userLogin = await userLoginService({email, password})

    return res.json(userLogin);
} catch (err) {
    if (err instanceof AppError) {
        return res.status(err.statusCode).send({
          message: err.message,
        });
    }
}
}

export default userLoginController;