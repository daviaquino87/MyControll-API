import { AppError } from "../../../../shared/error/AppError";

export class CPF {
  private readonly cpf: string;

  get value(): string {
    return this.cpf;
  }

  private verifyLength(cpf: string): boolean {
    let cpfNoMask = cpf.replace(/\D/g, "");

    if (cpfNoMask.length != 11) {
      return false;
    }
    return true;
  }

  constructor(cpf: string) {
    const validateLengthCpf = this.verifyLength(cpf);
    if (!validateLengthCpf) {
      throw new AppError("Invalid CPF", 404);
    }
    this.cpf = cpf;
  }
}
