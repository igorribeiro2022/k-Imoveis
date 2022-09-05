import { Request, Response } from "express"
import { AppError } from "../../errors/appError"
import listPropertiesService from "../../services/properties/listProperties.service"

const listPropertiesController = async (req: Request, res: Response) => {
    try {        
        const resp = await listPropertiesService()

        return res.status(200).json(resp)
    } catch (err) {
        if (err instanceof AppError) {
            return res.status(err.statusCode).send({
              message: err.message,
            });
          }
    }
}
export default listPropertiesController