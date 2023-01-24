import { ICreateTransaction } from "../../dtos/ICreateTransactionDTO";

export class CreateTransactionUseCase {
  async execute({ value, type, userID, categoryID }: ICreateTransaction) {}
}
