import { describe, expect, it } from "vitest";
import { User } from "./User";

describe("create user", () => {
  it("should possible create a instance user", () => {
    const user = new User({
      name: "Name Test",
      email: "teste@email.com",
      birth_date: "12/12/2001",
      cpf: "0000000000",
      password: "ubvqwvwo8wveqc",
    });

    expect(user).toBeTruthy();
  });
});
