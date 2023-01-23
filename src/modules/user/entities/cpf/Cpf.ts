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

  private verifyNumber(cpf: string) {
    var sum;
    var rest;
    sum = 0;
    let cpfNoMask = cpf.replace(/\D/g, "");

    if (cpfNoMask == "00000000000") {
      return false;
    }

    for (let i = 1; i <= 9; i++)
      sum = sum + parseInt(cpfNoMask.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(cpfNoMask.substring(9, 10))) {
      return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++)
      sum = sum + parseInt(cpfNoMask.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(cpfNoMask.substring(10, 11))) {
      return false;
    }
    return true;
  }

  constructor(cpf: string) {
    const validateLengthCpf = this.verifyLength(cpf);
    const validateNumberCpf = this.verifyNumber(cpf);

    if (!validateLengthCpf || !validateNumberCpf) {
      throw new AppError("Invalid CPF", 404);
    }
    this.cpf = cpf.replace(/\D/g, "");
  }
}
