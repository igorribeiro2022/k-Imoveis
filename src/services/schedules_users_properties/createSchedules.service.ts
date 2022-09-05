import AppDataSource from "../../data-source"
import { Properties } from "../../entities/properties.entity"
import { Schedules_users_properties } from "../../entities/schedules_users_properties.entity"
import { Users } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IScheduleRequest } from "../../interfaces/schedules"

const createSchedulesService = async ({ date, hour, propertyId, userId }: IScheduleRequest): Promise<Schedules_users_properties> => {
    const schedulesRepository = AppDataSource.getRepository(Schedules_users_properties)
    const propertiesRepository = AppDataSource.getRepository(Properties)
    const userRepository = AppDataSource.getRepository(Users)



    const properties = await propertiesRepository.findOneBy({ id: propertyId })
    if (!properties || !propertyId) {
        throw new AppError("Property not found", 404);
    }
    


    const users = await userRepository.findOneBy({id: userId})
    if (!users || !userId) {
        throw new AppError("User not found", 404);
    }


    const newDate = new Date(date).getDay()
    if (newDate === 0 || newDate === 6) {
        throw new AppError("Invalid Date", 400);
    }
    
    
    const newHour = Number(hour)
    console.log(newHour);
    if (newHour < 8 || newHour > 18) {
        throw new AppError("Invalid hour", 400);
    }


    const schedulesProperties = await schedulesRepository.find({
        relations: { property: true },
        where: { date, hour, property: properties }
    })    
    if (schedulesProperties.length > 0) {
        throw new AppError("Schedules already exists", 400);
    }



    const newSchedule = schedulesRepository.create({
        date,
        hour,
        property: properties,
        users
    })

    await schedulesRepository.save(newSchedule)

    return newSchedule
}

export default createSchedulesService