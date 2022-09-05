import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";

const listPropertiesService = async () => {
  
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const properties = await propertiesRepository.find()
  
  if (!properties) {
    throw new AppError("Properties not found", 400);
  }

  return properties
};

export default listPropertiesService;

