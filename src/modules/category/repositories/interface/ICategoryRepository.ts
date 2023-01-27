import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { Category } from "../../entities/Category";

export interface ICategoryRepository {
  create({ name, userID }: ICreateCategoryDTO): Promise<void>;
  findCategoryByUser(userId: string, name: string): Promise<Category>;
}
