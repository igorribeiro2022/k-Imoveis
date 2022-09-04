import { Request, Response } from "express"
import listCategoriesService from "../../services/categories/listCategories.service"

const listCategoryController = async (req: Request, res: Response) => {
    try {
        const allCategories = await listCategoriesService()

        return res.status(200).send(allCategories)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(401).send({
                error: err.name,
                message: err.message
            })
        }
    }
}

export default listCategoryController
