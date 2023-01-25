import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/interface/IUserRepository";

import bcrypt from "bcrypt";
import { AppError } from "../../../../shared/error/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("userRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ name, email, cpf, birth_date, password }: ICreateUserDTO) {
    const userAlreadyExists = await this.userRepository.findUserbyCPF(cpf);
    const EmailAlreadyExists = await this.userRepository.findUserByEmail(email);

    if (userAlreadyExists || EmailAlreadyExists) {
      throw new AppError("Invalid data.", 404);
    }

    const passwordHash = await bcrypt.hash(password, 8);

    await this.userRepository.create({
      name,
      email,
      cpf,
      birth_date: new Date(birth_date),
      password: passwordHash,
    });
  }
}
