import { Router } from "express"
import createCategoryController from "../controllers/categories/createCategory.controller"
import listCategoryController from "../controllers/categories/listCategory.controller"
import listOneCategoryController from "../controllers/categories/listOneCategory.controller"
import authTokenMiddleware from "../middlewares/authToken.middleware"
import isAdmMiddleware from "../middlewares/isAdm.middleware"

const route = Router()
export const categoriesRoutes = () => {

    route.post("", authTokenMiddleware, isAdmMiddleware, createCategoryController)
    route.get("", listCategoryController)
    route.get("/:id/properties", listOneCategoryController)

    return route
}