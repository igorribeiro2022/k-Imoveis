import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import * as bcrypt from "bcryptjs";
import { Users } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserLogin } from "../../interfaces/users";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(Users);
  const user = await userRepository.findOne({ where: { email: email } });

  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }

  if (user.isActive === false) {
    throw new AppError("User is not active", 400);
  }

  const compararPassword = await bcrypt.compare(password, user.password);

  if (!compararPassword) {
    throw new AppError("Invalid credentials", 403);
  }

  const token = jwt.sign(
    { email: email, id: user.id, isAdm: user.isAdm },
    process.env.SECRET_KEY as string,
    { expiresIn: "24h" }
  );

  return { token };
};

export default userLoginService;
