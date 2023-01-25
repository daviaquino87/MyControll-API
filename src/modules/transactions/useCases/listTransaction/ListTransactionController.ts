import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTransactionUseCase } from "./ListTransactionUseCase";

export class ListTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const listTransactionUseCase = container.resolve(ListTransactionUseCase);

    const transactions = await listTransactionUseCase.execute(id);

    return response.json(transactions);
  }
}
