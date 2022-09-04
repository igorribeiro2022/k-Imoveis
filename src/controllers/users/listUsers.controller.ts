import { Request, Response } from "express"
import listUsersService from "../../services/users/listUsers.service"
import { instanceToPlain } from "class-transformer"
import { AppError } from "../../errors/appError"

const listUsersController = async (req: Request, res: Response) => {
    try {
        const allUsers = await listUsersService()

        return res.status(200).send(instanceToPlain(allUsers))
    } catch (err) {
        if (err instanceof AppError) {
            return res.status(err.statusCode).send({
                error: err.name,
                message: err.message
            })
        }
    }
}

export default listUsersController