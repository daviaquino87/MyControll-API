import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "./createUserUseCase";

import { AppError } from "../../../../shared/error/AppError";

let userRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("create a new user", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });
  it("should be able possible to create a new user", async () => {
    const user = {
      name: "Name Test",
      email: "teste@email.com",
      birth_date: new Date("12/12/2001"),
      cpf: "291.923.030-13",
      password: "ubvqwvwo8wveqc",
    };

    await createUserUseCase.execute(user);

    expect(userRepositoryInMemory.users).toHaveLength(1);
    expect(userRepositoryInMemory.users[0].name).toEqual(user.name);
  });

  it("should not a possible to create a new user with cpf already exists", async () => {
    const user = {
      name: "Name Test",
      email: "teste@email.com",
      birth_date: new Date("12/12/2001"),
      cpf: "291.923.030-13",
      password: "ubvqwvwo8wveqc",
    };

    await createUserUseCase.execute(user);

    expect(async () => {
      await createUserUseCase.execute(user);
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be possible to create a user with a password shorter than eight characters", async () => {
    const user = {
      name: "Name Test",
      email: "teste@email.com",
      birth_date: new Date("12/12/2001"),
      cpf: "291.923.030-13",
      password: "1234567",
    };

    await createUserUseCase.execute(user);

    expect(async () => {
      await createUserUseCase.execute(user);
    }).rejects.toBeInstanceOf(AppError);
  });
});
