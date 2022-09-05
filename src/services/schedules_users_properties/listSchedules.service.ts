import AppDataSource from "../../data-source";
import { Schedules_users_properties } from "../../entities/schedules_users_properties.entity";
import { AppError } from "../../errors/appError";

const listSchedulesService = async (id: string) => {
    const schedulesRepository = AppDataSource.getRepository(Schedules_users_properties)
    const schedules = await schedulesRepository.findOne({where: {id}, relations: {property: true}})

    if (!schedules) {
        throw new AppError("Property not found", 404);
    }

    return schedules
};

export default listSchedulesService;