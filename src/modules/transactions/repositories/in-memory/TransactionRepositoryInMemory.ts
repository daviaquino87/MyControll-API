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
  }: ICreateTransaction): Promise<void> {
    const transaction = new Transaction({
      value,
      type,
      userID,
      categoryID,
    });

    this.transactions.push(transaction);
  }
}
