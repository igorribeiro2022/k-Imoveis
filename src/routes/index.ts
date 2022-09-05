import { Express } from "express"
import { categoriesRoutes } from "./categories.routes"
import { loginRoute } from "./login.routes"
import { propertiesRoutes } from "./properties.routes"
import { schedulesRoutes } from "./schedules.routes"
import { usersRoutes } from "./users.routes"

export const appRoutes = (app: Express) => {

    app.use("/users", usersRoutes())
    app.use("/login", loginRoute())
    app.use("/categories", categoriesRoutes())
    app.use("/properties", propertiesRoutes())
    app.use("/schedules", schedulesRoutes())
}