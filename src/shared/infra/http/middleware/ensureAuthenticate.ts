import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";

import { UserRepository } from "../../../../modules/users/infra/typeorm/repositories/UserRepository";
import { AppError } from "../../../error/AppError";

type JWTPlayload = {
  id: string;
  exp: number;
};

export const ensureAuthenticated = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new AppError("Unauthorized!", 401);
  }

  const userRepository = new UserRepository();

  const token = String(authorization).split(" ");

  const verify = jwt.decode(token[1]) as JWTPlayload;

  if (new Date(verify.exp * 1000).getTime() < new Date().getTime()) {
    throw new AppError("Unauthorized!", 401);
  }

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
