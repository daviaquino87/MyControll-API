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
    await this.transactionRepository.create({
      type,
      value,
      userID,
      categoryID,
      transact_date,
    });
  }
}
