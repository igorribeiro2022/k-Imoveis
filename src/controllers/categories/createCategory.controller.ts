import { Request, Response } from "express"
import { AppError } from "../../errors/appError"
import createCategoryService from "../../services/categories/createCategory.service"

const createCategoryController = async (req: Request, res: Response) => {
    try {
        const { name } = req.body
        
        const resp = await createCategoryService({name})

        return res.status(201).json(resp)
    } catch (err) {
        if (err instanceof AppError) {
            return res.status(400).send({
              message: err.message,
            });
          }
    }
}
export default createCategoryController