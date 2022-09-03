import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import { IUserLogin } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(Users);
  const user = await userRepository.findOne({ where: { email: email } });

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  if (user.isActive === false) {
    throw new AppError("Invalid user", 401);
  }

  const compararPassword = await bcrypt.compare(password, user.password);

  if (!compararPassword) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = jwt.sign(
    { email: email, id: user.id, isAdm: user.isAdm },
    process.env.SECRET_KEY as string,
    { expiresIn: "24h" }
  );

  return token;
};

export default userLoginService;
