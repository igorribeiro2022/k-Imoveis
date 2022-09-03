import { Router } from "express"
import userCreateController from "../controllers/users/createUser.controller"
import deleteUserController from "../controllers/users/deleteUser.controller"
import listUsersController from "../controllers/users/listUsers.controller"
import authTokenMiddleware from "../middlewares/authToken.middleware"
import isActiveMiddleware from "../middlewares/isActive.middleware"
import isAdmMiddleware from "../middlewares/isAdm.middleware"

const route = Router()
export const usersRoutes = () => {

    route.post("", userCreateController)
    route.get("", authTokenMiddleware, isAdmMiddleware, listUsersController)
    route.delete("/:id",authTokenMiddleware, isAdmMiddleware, isActiveMiddleware, deleteUserController)
    
    return route
}