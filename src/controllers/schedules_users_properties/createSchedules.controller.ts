import { Request, Response } from "express"
import { AppError } from "../../errors/appError"
import createSchedulesService from "../../services/schedules_users_properties/createSchedules.service"

const createSchedulesController = async (req: Request, res: Response) => {
    try {
      const userId = req.user.id
      const { date, hour, propertyId } = req.body
      
      await createSchedulesService({ date, hour, propertyId, userId })

      return res.status(201).json({message: "Schedule created"})

    } catch (err) {
        if (err instanceof AppError) {
            return res.status(err.statusCode).send({
              message: err.message,
            });
          }
    }
}

export default createSchedulesController