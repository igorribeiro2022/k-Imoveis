import { Router } from "express"
import createSchedulesController from "../controllers/schedules_users_properties/createSchedules.controller"
import listSchedulesController from "../controllers/schedules_users_properties/listSchedules.controller"
import authTokenMiddleware from "../middlewares/authToken.middleware"
import isAdmMiddleware from "../middlewares/isAdm.middleware"

const route = Router()
export const schedulesRoutes = () => {

    route.post("", authTokenMiddleware, createSchedulesController)
    route.get("/properties/:id", authTokenMiddleware, isAdmMiddleware, listSchedulesController)
    return route
}