import { container } from "tsyringe";

import { IUserRepository } from "../../modules/user/repositories/interface/IUserRepository";
import { UserRepositoryInMemory } from "../../modules/user/repositories/in-memory/UserRepositoryInMemory";

container.registerSingleton<IUserRepository>(
  "userRepositoryInmemory",
  UserRepositoryInMemory
);
