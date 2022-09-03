import {Express} from "express"
import { loginRoute } from "./login.routes"
import { usersRoutes } from "./users.routes"

export const appRoutes = (app: Express) => {

    app.use("/users", usersRoutes())
    app.use("/login", loginRoute())
/*    app.use("/categories")
    app.use("/properties") */
}