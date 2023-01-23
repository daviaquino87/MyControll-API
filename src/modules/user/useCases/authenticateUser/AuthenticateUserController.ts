import { container } from "tsyringe";
import { Request, Response } from "express";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { AppError } from "../../../../shared/error/AppError";

export class AuthenticateUserController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    if (!email || !password) {
      throw new AppError("All fields must be filled in", 404);
    }

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);
    const authUser = await authenticateUserUseCase.execute({ email, password });

    return response.json(authUser);
  }
}
