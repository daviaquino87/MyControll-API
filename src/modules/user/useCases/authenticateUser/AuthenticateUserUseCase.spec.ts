import { beforeEach, describe, expect, it } from "vitest";

import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../createUserUseCase/createUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let userRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
let authenticateUserUseCase: AuthenticateUserUseCase;

describe("Auth user tests", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    authenticateUserUseCase = new AuthenticateUserUseCase(
      userRepositoryInMemory
    );
  });

  it("should be able possible to auth user with correct credentials", async () => {
    const user = {
      name: "Name Test",
      email: "teste@email.com",
      birth_date: "12/12/2001",
      cpf: "291.923.030-13",
      password: "ubvqwvwo8wveqc",
    };

    await createUserUseCase.execute(user);

    const userLogged = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(userLogged).toHaveProperty("token");
  });
});
