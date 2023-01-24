import { CPF } from "./cpf/Cpf";
import { User } from "./User";

describe("create user", () => {
  it("should possible create a instance user", () => {
    const user = new User({
      name: "Name Test",
      email: "teste@email.com",
      birth_date: "12/12/2001",
      cpf: new CPF("291.923.030-13"),
      password: "ubvqwvwo8wveqc",
    });

    expect(user).toBeTruthy();
  });
});
