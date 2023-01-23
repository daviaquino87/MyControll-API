import { describe, it, expect } from "vitest";
import { AppError } from "../../../../shared/error/AppError";
import { CPF } from "./Cpf";

describe("cpf validate tests", () => {
  it("should be able possible to create a new valid cpf", () => {
    const cpf = new CPF("08113265350");
    expect(cpf).toBeTruthy();
  });

  it("should not be able possible to create a invalid cpf", () => {
    expect(() => {
      const cpf = new CPF("081132653");
    }).toThrowError(AppError);
  });
});
