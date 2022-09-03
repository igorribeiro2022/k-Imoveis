import { Request, Response } from "express"
import listUsersService from "../../services/users/listUsers.service"


const listUsersController = async (req: Request, res: Response) => {
    try {
        const allUsers = await listUsersService()

        return res.status(200).send(allUsers)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(401).send({
                error: err.name,
                message: err.message
            })
        }
    }
}

export default listUsersController