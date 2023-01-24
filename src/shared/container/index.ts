import { container } from "tsyringe";

import { IUserRepository } from "../../modules/users/repositories/interface/IUserRepository";
import { UserRepository } from "../../modules/users/infra/typeorm/repositories/UserRepository";

import { ITransactionRepository } from "../../modules/transactions/repositories/interface/ITransactionRepository";
import { TransactionRepository } from "../../modules/transactions/infra/typeorm/repositories/TransactionRepository";

container.registerSingleton<IUserRepository>("userRepository", UserRepository);

container.registerSingleton<ITransactionRepository>(
  "TransactionRepository",
  TransactionRepository
);
