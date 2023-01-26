import { UserRepositoryInMemory } from "../../../users/repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../../../users/useCases/createUserUseCase/createUserUseCase";
import { Transaction } from "../../entities/Transation";
import { TransactionRepositoryInMemory } from "../../repositories/in-memory/TransactionRepositoryInMemory";
import { ITransactionRepository } from "../../repositories/interface/ITransactionRepository";
import { CreateTransactionUseCase } from "../createTransaction/CreateTransactionUseCase";
import { ListTransactionUseCase } from "./ListTransactionUseCase";

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

let transactionRepositoryInMemory: ITransactionRepository;
let listTransactionUseCase: ListTransactionUseCase;
let createTransactionUseCase: CreateTransactionUseCase;

describe("Transaction list test", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);

    transactionRepositoryInMemory = new TransactionRepositoryInMemory();
    createTransactionUseCase = new CreateTransactionUseCase(
      transactionRepositoryInMemory
    );
    listTransactionUseCase = new ListTransactionUseCase(
      transactionRepositoryInMemory
    );
  });
  it("should be able possible to list all transactions", async () => {
    const user = {
      name: "User Test",
      email: "user@test.com",
      cpf: "490.084.700-39",
      birth_date: new Date("08/08/2001"),
      password: "akbdkh123",
    };

    await createUserUseCase.execute(user);

    const transaction = {
      type: "deposit",
      userID: userRepositoryInMemory.users[0].id,
      value: 121,
    };

    await createTransactionUseCase.execute(transaction);
    await createTransactionUseCase.execute(transaction);

    const transactions = await listTransactionUseCase.execute(
      userRepositoryInMemory.users[0].id
    );

    expect(transactions).toEqual(
      expect.arrayContaining([expect.any(Transaction)])
    );
  });
});
