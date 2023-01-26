import { ICreateTransaction } from "src/modules/transactions/dtos/ICreateTransactionDTO";
import { ITransactionRepository } from "../../../repositories/interface/ITransactionRepository";

import { AppdataSource } from "../../../../../shared/infra/typeorm/data-source";
import { Transaction as TypeormTransaction } from "../../../../../shared/infra/typeorm/entities/Transaction";
import { Transaction } from "../../../entities/Transation";
import { TypeormMapper } from "../mappers/TypeormMapper";

export class TransactionRepository implements ITransactionRepository {
  private repository;

  constructor() {
    this.repository = AppdataSource.getRepository(TypeormTransaction);
  }

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

    const raw = this.repository.create(TypeormMapper.toTypeorm(transaction));

    await this.repository.save(raw);
  }

  async listAll(userID: string): Promise<Transaction[]> {
    const data = await this.repository.findBy({ userID });
    const user = data.map((user) => TypeormMapper.toApplication(user));

    return user;
  }
}
