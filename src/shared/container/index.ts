import { container } from "tsyringe";

import { IUserRepository } from "../../modules/user/repositories/interface/IUserRepository";
import { UserRepository } from "../../modules/user/infra/repositories/UserRepository";

container.registerSingleton<IUserRepository>("userRepository", UserRepository);
