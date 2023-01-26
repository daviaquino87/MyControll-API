import { UserRepositoryInMemory } from "../../../users/repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../../../users/useCases/createUserUseCase/createUserUseCase";

import { TransactionRepositoryInMemory } from "../../repositories/in-memory/TransactionRepositoryInMemory";
import { CreateTransactionUseCase } from "../createTransaction/CreateTransactionUseCase";

import { ListBalanceUseCase } from "./ListBalanceUseCase";

let transactionsRepositoryInMemory: TransactionRepositoryInMemory;
let createTransactionUseCase: CreateTransactionUseCase;

let listBalanceUseCase: ListBalanceUseCase;

describe("List balance test", () => {
  beforeEach(() => {
    transactionsRepositoryInMemory = new TransactionRepositoryInMemory();
    createTransactionUseCase = new CreateTransactionUseCase(
      transactionsRepositoryInMemory
    );

    listBalanceUseCase = new ListBalanceUseCase(transactionsRepositoryInMemory);
  });
  it("should be able possible to list the sum balance of a user", async () => {
    const transaction = {
      value: 100,
      type: "deposit",
      userID: "userId",
    };
    await createTransactionUseCase.execute(transaction);

    await createTransactionUseCase.execute(transaction);

    const balance = await listBalanceUseCase.execute(transaction.userID);

    expect(balance).toEqual(200);
  });
});
