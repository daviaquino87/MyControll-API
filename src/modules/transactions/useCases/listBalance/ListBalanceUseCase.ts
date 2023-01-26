import { inject, injectable } from "tsyringe";
import { ITransactionRepository } from "../../repositories/interface/ITransactionRepository";

@injectable()
export class ListBalanceUseCase {
  constructor(
    @inject("TransactionRepository")
    private transactionRepository: ITransactionRepository
  ) {}
  async execute(userID: string): Promise<number> {
    const transactions = await this.transactionRepository.listAll(userID);
    let balance: number = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === "deposit") {
        balance += transaction.value;
      } else {
        balance -= transaction.value;
      }
    });

    return balance;
  }
}
