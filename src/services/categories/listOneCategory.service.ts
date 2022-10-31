import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { Categories } from "../../entities/categories.entity";

const listOneCategoryService = async (id: string) => {
  const categoriesRepository = AppDataSource.getRepository(Categories);
  const category = await categoriesRepository.findOne({
    where: { id },
    relations: { properties: true },
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};

export default listOneCategoryService;
