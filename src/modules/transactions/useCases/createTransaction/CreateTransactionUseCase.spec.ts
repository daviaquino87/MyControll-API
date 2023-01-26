import { AppError } from "../../../../shared/error/AppError";
import { TransactionRepositoryInMemory } from "../../repositories/in-memory/TransactionRepositoryInMemory";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";

let transactionRepositoryInMemory: TransactionRepositoryInMemory;
let createTransactionUseCase: CreateTransactionUseCase;

describe("Transactions tests", () => {
  beforeEach(() => {
    transactionRepositoryInMemory = new TransactionRepositoryInMemory();
    createTransactionUseCase = new CreateTransactionUseCase(
      transactionRepositoryInMemory
    );
  });

  it("should be able to possible to create a new transaction", async () => {
    const transaction = {
      value: 121,
      type: "deposit",
      userID: "userId",
      transact_date: new Date("2021/09/08"),
    };

    await createTransactionUseCase.execute(transaction);

    expect(transactionRepositoryInMemory.transactions[0]).toHaveProperty("_id");
  });

  it("must not be possible to create a transaction whose type is different from buy or deposit", async () => {
    expect(async () => {
      await createTransactionUseCase.execute({
        value: 121,
        type: "test",
        userID: "userId",
        transact_date: new Date("2021/09/08"),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
