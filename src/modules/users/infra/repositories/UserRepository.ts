import { AppdataSource } from "../../../../shared/infra/typeorm/data-source";
import { User as userOrm } from "../../../../shared/infra/typeorm/entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

import { CPF } from "../../entities/cpf/Cpf";
import { User } from "../../entities/User";

import { IUserRepository } from "../../repositories/interface/IUserRepository";
import { TypeormMapper } from "../mappers/TypeormMapper";

export class UserRepository implements IUserRepository {
  private repository;

  constructor() {
    this.repository = AppdataSource.getRepository(userOrm);
  }
  async create({
    name,
    email,
    cpf,
    birth_date,
    password,
  }: ICreateUserDTO): Promise<void> {
    const data = new User({
      name,
      email,
      cpf: new CPF(cpf),
      birth_date,
      password,
    });

    const raw = this.repository.create(TypeormMapper.toOrm(data));

    await this.repository.save(raw);
  }

  async findUserbyCPF(cpf: string): Promise<User> {
    const user = await this.repository.findOneBy({ cpf });

    if (!user) {
      return null;
    }

    return TypeormMapper.toAplication(user);
  }

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({ email });

    if (!user) {
      return null;
    }

    return TypeormMapper.toAplication(user);
  }

  async findUserById(id: string): Promise<User> {
    const user = await this.repository.findOneBy({ id });

    if (!user) {
      return null;
    }

    return TypeormMapper.toAplication(user);
  }
}
