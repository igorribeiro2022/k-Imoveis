import { Request, Response } from "express"
import { AppError } from "../../errors/appError"
import createPropertyService from "../../services/properties/createProperty.service"

const createPropertyController = async (req: Request, res: Response) => {
    try {
        const property = req.body
        
        const resp = await createPropertyService(property)

        return res.status(201).json(resp)
    } catch (err) {
        if (err instanceof AppError) {
            return res.status(err.statusCode).send({
              message: err.message,
            });
          }
    }
}
export default createPropertyController