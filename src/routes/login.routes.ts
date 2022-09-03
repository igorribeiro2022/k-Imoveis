import { Router } from "express"
import userLoginController from "../controllers/users/userLogin.controller"

const route = Router()
export const loginRoute = () => {

    route.post("", userLoginController)
    return route
}