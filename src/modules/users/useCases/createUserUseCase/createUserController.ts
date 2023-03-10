import { Request, Response } from "express";
import { AppError } from "../../../../shared/error/AppError";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, cpf, birth_date, password } = request.body;

    if (!name || !email || !cpf || !birth_date || !password) {
      throw new AppError("All fields must be filled in", 404);
    }

    if (password.length < 8) {
      throw new AppError(
        "The password field must be at least 8 characters long",
        404
      );
    }

    const createUserUseCase = container.resolve(CreateUserUseCase);
    await createUserUseCase.execute({
      name,
      email,
      cpf,
      birth_date,
      password,
    });

    return response.status(201).send();
  }
}
