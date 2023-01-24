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
  }: ICreateTransaction): Promise<void> {
    const data = new Transaction({ value, type, userID, categoryID });

    const raw = this.repository.create(TypeormMapper.toTypeorm(data));

    await this.repository.save(raw);
  }
}
