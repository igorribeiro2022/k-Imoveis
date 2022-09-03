import { Request, Response } from "express";
import userLoginService from "../../services/users/userLogin.service";

const userLoginController = async (req: Request, res: Response) => {
try {
    const { email, password } = req.body;

    const userLogin = await userLoginService({email, password})

    return res.json(userLogin);
} catch (err) {
    if (err instanceof Error) {
        return res.status(403).send({
          error: err.name,
          message: err.message,
        });
    }
}
}

export default userLoginController;