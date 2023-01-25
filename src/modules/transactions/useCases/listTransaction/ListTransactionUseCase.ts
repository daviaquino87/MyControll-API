import { Transaction } from "../../entities/Transation";
import { ITransactionRepository } from "../../repositories/interface/ITransactionRepository";

export class ListTransactionUseCase {
  constructor(private transactionRepository: ITransactionRepository) {}
  async execute(userID: string): Promise<Transaction[]> {
    const transactions = await this.transactionRepository.listAll(userID);

    return transactions;
  }
}
