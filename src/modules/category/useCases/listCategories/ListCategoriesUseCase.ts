import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/interface/ICategoryRepository";

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(userID: string): Promise<Category[]> {
    const categories = await this.categoryRepository.listCategories(userID);

    return categories;
  }
}
