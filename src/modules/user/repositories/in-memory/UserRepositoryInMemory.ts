import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../interface/IUserRepository";

import { CPF } from "../../entities/cpf/Cpf";
import { User } from "../../entities/User";

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
      cpf: new CPF(cpf),
      birth_date,
      password,
    });

    this.users.push(user);
  }

  async findUserbyCPF(cpf: string): Promise<User> {
    return this.users.find((user) => user.cpf.value === cpf);
  }

  async findUserByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
}
