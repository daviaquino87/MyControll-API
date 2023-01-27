import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../interface/ICategoryRepository";

export class CategoryRepositoryInMemory implements ICategoryRepository {
  public categorys: Category[] = [];

  async create({ name, userID }: ICreateCategoryDTO): Promise<void> {
    const category = new Category({
      name,
      userID,
    });

    this.categorys.push(category);
  }
  async findCategoryByUser(userId: string, name: string): Promise<Category> {
    return this.categorys.find(
      (category) => category.userID === userId && category.name === name
    );
  }
}
