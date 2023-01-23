import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../../../../modules/user/infra/repositories/UserRepository";
import { AppError } from "../../../error/AppError";

interface JwtPlaylod {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new AppError("Token missing!", 401);
  }

  const [, token] = authorization.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "9d4a129eb058dce7bae2d1534ac9ad4bb45164fb"
    ) as JwtPlaylod;

    const userRepository = new UserRepository();
    const user = await userRepository.findUserById(user_id);

    if (!user) {
      throw new AppError("User does not exist");
    }

    request.user = {
      id: user_id,
    };
  } catch {
    throw new AppError("Invalid token!", 401);
  }

  next();
}
