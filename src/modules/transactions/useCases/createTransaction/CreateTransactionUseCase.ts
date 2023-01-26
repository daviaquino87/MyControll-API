import { AppError } from "../../../../shared/error/AppError";
import { inject, injectable } from "tsyringe";

import { ICreateTransaction } from "../../dtos/ICreateTransactionDTO";
import { ITransactionRepository } from "../../repositories/interface/ITransactionRepository";

@injectable()
export class CreateTransactionUseCase {
  constructor(
    @inject("TransactionRepository")
    private transactionRepository: ITransactionRepository
  ) {}
  async execute({
    value,
    type,
    userID,
    categoryID,
    transact_date,
  }: ICreateTransaction) {
    if (type !== "buy" && type !== "deposit") {
      throw new AppError("The type must be 'buy' or 'deposit'");
    }

    await this.transactionRepository.create({
      type,
      value,
      userID,
      categoryID,
      transact_date,
    });
  }
}
