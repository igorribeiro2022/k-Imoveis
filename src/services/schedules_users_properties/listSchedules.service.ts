import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { Properties } from "../../entities/properties.entity";

const listSchedulesService = async (id: string) => {
    const propertiesRepository = AppDataSource.getRepository(Properties)
    const property = await propertiesRepository.findOne({where: {id}, relations: {schedules: true}})

    if (!property) {
        throw new AppError("Property not found", 404);
    }

    return property
};

export default listSchedulesService;