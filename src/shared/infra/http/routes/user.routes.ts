import { Router } from "express";
import { CreateUserController } from "../../../../modules/users/useCases/createUserUseCase/createUserController";

const createUserController = new CreateUserController();

export const userRouter = Router();

userRouter.post("/", createUserController.handle);
