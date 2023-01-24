import { ICreateTransaction } from "../../dtos/ICreateTransactionDTO";
import { ITransactionRepository } from "../../repositories/interface/ITransactionRepository";

export class CreateTransactionUseCase {
  constructor(private transactionRepository: ITransactionRepository) {}
  async execute({ value, type, userID, categoryID }: ICreateTransaction) {
    await this.transactionRepository.create({
      type,
      value,
      userID,
      categoryID,
    });
  }
}
