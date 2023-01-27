import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../interface/ICategoryRepository";

export class CategoryRepositoryInMemory implements ICategoryRepository {
  public categories: Category[] = [];

  async create({ name, userID }: ICreateCategoryDTO): Promise<void> {
    const category = new Category({
      name,
      userID,
    });

    this.categories.push(category);
  }
  async findCategoryByUser(userId: string, name: string): Promise<Category> {
    return this.categories.find(
      (category) => category.userID === userId && category.name === name
    );
  }

  async listCategories(userID: string): Promise<Category[]> {
    return this.categories.filter((category) => category.userID === userID);
  }
}
