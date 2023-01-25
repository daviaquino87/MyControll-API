import { inject, injectable } from "tsyringe";
import { Transaction } from "../../entities/Transation";
import { ITransactionRepository } from "../../repositories/interface/ITransactionRepository";

@injectable()
export class ListTransactionUseCase {
  constructor(
    @inject("TransactionRepository")
    private transactionRepository: ITransactionRepository
  ) {}
  async execute(userID: string): Promise<Transaction[]> {
    const transactions = await this.transactionRepository.listAll(userID);

    return transactions;
  }
}
