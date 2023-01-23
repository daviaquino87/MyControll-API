import { container } from "tsyringe";

import { IUserRepository } from "src/modules/user/repositories/interface/IUserRepository";
import { UserRepositoryInMemory } from "src/modules/user/repositories/in-memory/UserRepositoryInMemory";

container.registerSingleton<IUserRepository>(
  "userRepositoryInmemory",
  UserRepositoryInMemory
);
