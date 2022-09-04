import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const deleteUserService = async (id: string) => {
  const usersRepository = AppDataSource.getRepository(Users);
  const userExist = await usersRepository.findOne({where: { id }});

  if (!userExist) {
    throw new AppError("User not found", 404);
  }

  if (!userExist.id) {
    throw new AppError("User not found", 404);
  }
  
  userExist.isActive = false 

  await usersRepository.save(userExist)

  return
};

export default deleteUserService;
