import { Request, Response } from "express"
import { AppError } from "../../errors/appError"
import listOneCategoryService from "../../services/categories/listOneCategory.service"

const listOneCategoryController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const category = await listOneCategoryService(id)

        return res.status(200).send(category)
    } catch (err) {
        if (err instanceof AppError) {
            return res.status(err.statusCode).send({
                message: err.message
            })
        }
    }
}

export default listOneCategoryController
