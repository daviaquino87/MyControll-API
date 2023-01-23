import "dotenv/config";
import { IUserRepository } from "../../repositories/interface/IUserRepository";

import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

import { AppError } from "../../../../shared/error/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
  authorized: boolean;
}

export class AuthenticateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findUserByEmail(email);

    if (!user) {
      throw new AppError("Incorrect email or password", 404);
    }

    const passwordMath = await compare(password, user.password);

    if (!passwordMath) {
      throw new AppError("Incorrect email or password");
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_PASS ?? "",
      { expiresIn: "1h" }
    );

    const auth: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      token: token,
      authorized: true,
    };

    return auth;
  }
}
