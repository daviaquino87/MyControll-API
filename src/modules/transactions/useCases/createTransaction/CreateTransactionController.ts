import { container } from "tsyringe";
import { Request, Response } from "express";

import { CreateTransactionUseCase } from "./CreateTransactionUseCase";
import { AppError } from "../../../../shared/error/AppError";

export class CreateTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { value, type, categoryID } = request.body;
    const { id } = request.user;

    if (!value || !type) {
      throw new AppError("All fields must be filled in", 404);
    }

    const createTransactionUseCase = container.resolve(
      CreateTransactionUseCase
    );

    await createTransactionUseCase.execute({
      value,
      type,
      userID: id,
      categoryID,
    });

    return response.status(201).send();
  }
}
