import { ICreateTransaction } from "../../dtos/ICreateTransactionDTO";
import { Transaction } from "../../entities/Transation";
import { ITransactionRepository } from "../interface/ITransactionRepository";

export class TransactionRepositoryInMemory implements ITransactionRepository {
  transactions: Transaction[] = [];

  async create({
    value,
    type,
    userID,
    categoryID,
    transact_date,
  }: ICreateTransaction): Promise<void> {
    if (transact_date) {
      transact_date = new Date(transact_date);
    }
    const transaction = new Transaction({
      value,
      type,
      userID,
      categoryID,
      transact_date: transact_date ?? new Date(),
    });

    this.transactions.push(transaction);
  }

  async listAll(userID: string): Promise<Transaction[]> {
    return this.transactions.filter(
      (transaction) => transaction.userID === userID
    );
  }
}
