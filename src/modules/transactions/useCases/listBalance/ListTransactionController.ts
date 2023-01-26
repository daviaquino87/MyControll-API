import { container } from "tsyringe";

import { Request, Response } from "express";
import { ListBalanceUseCase } from "./ListBalanceUseCase";

export class ListBalanceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listBalanceUseCase = container.resolve(ListBalanceUseCase);

    const balance = await listBalanceUseCase.execute(id);

    return response.json({ balance: balance });
  }
}
