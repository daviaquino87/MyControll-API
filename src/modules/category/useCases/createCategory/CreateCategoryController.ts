import { Request, Response } from "express";
import { AppError } from "../../../../shared/error/AppError";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const { id } = request.user;

    if (!name) {
      throw new AppError("The name field must be filled in", 404);
    }

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    await createCategoryUseCase.execute({ name, userID: id });

    return response.status(201).send();
  }
}
