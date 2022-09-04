import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/appError";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryService = async ({ name }: ICategoryRequest) => {
  const categoriesRepository = AppDataSource.getRepository(Categories);
  const categoryExist = await categoriesRepository.findOne({ where: { name } });

  if (categoryExist) {
    throw new AppError("Category already exists", 400);
  }

  const category = categoriesRepository.create({name});
  await categoriesRepository.save(category);
  
  return category
};
export default createCategoryService;
