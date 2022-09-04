import { Router } from "express"
import createPropertyController from "../controllers/properties/createProperty.controller"
import listPropertiesController from "../controllers/properties/listProperties.controller"
import authTokenMiddleware from "../middlewares/authToken.middleware"
import isAdmMiddleware from "../middlewares/isAdm.middleware"

const route = Router()
export const propertiesRoutes = () => {

    route.post("", authTokenMiddleware, isAdmMiddleware, createPropertyController)
    route.get("", listPropertiesController)
    return route
}