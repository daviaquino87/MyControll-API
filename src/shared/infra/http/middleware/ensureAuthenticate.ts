import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";

import { UserRepository } from "../../../../modules/users/infra/typeorm/repositories/UserRepository";
import { AppError } from "../../../error/AppError";

type JWTPlayload = {
  id: string;
};

export const ensureAuthenticated = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { authorization } = request.headers;

  const userRepository = new UserRepository();

  const token = String(authorization).split(" ");

  const { id } = jwt.verify(
    token[1],
    String(process.env.JWT_PASS)
  ) as JWTPlayload;

  const user = await userRepository.findUserById(id);

  if (!user) {
    throw new AppError("Unauthorized!", 401);
  }

  request.user = {
    id: user.id,
  };

  next();
};
