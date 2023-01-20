import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../interface/IUserRepository";

export class UserRepositoryInMemory implements IUserRepository {
  users: User[] = [];

  async create({
    name,
    email,
    cpf,
    birth_date,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new User({
      name,
      email,
      cpf,
      birth_date,
      password,
    });

    this.users.push(user);
  }

  async findUser(cpf: string): Promise<User> {
    return this.users.find((user) => user.cpf === cpf);
  }
}
