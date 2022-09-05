import { Request, Response } from "express"
import { AppError } from "../../errors/appError"
import listSchedulesService from "../../services/schedules_users_properties/listSchedules.service"

const listSchedulesController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const allCategories = await listSchedulesService(id)

        return res.status(200).send(allCategories)
    } catch (err) {
        if (err instanceof AppError) {
            return res.status(err.statusCode).send({
                message: err.message
            })
        }
    }
}

export default listSchedulesController