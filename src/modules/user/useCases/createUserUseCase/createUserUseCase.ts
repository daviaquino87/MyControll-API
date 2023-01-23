import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/interface/IUserRepository";
import { AppError } from "../../../../shared/error/AppError";
import bcrypt from "bcrypt";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ name, email, cpf, birth_date, password }: ICreateUserDTO) {
    const userAlreadyExists = await this.userRepository.findUser(cpf);

    if (userAlreadyExists) {
      throw new AppError("Invalid data.", 404);
    }

    const passwordHash = await bcrypt.hash(password, 8);

    await this.userRepository.create({
      name,
      email,
      cpf,
      birth_date,
      password: passwordHash,
    });
  }
}
