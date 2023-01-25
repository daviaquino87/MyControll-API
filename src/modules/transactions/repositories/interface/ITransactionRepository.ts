import { ICreateTransaction } from "../../dtos/ICreateTransactionDTO";
import { Transaction } from "../../entities/Transation";

export interface ITransactionRepository {
  create(data: ICreateTransaction): Promise<void>;
  listAll(userID: string): Promise<Transaction[]>;
}
