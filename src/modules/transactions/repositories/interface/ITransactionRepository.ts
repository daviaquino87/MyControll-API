import { ICreateTransaction } from "../../dtos/ICreateTransactionDTO";

export interface ITransactionRepository {
  create({
    value,
    type,
    userID,
    categoryID,
  }: ICreateTransaction): Promise<void>;
}
