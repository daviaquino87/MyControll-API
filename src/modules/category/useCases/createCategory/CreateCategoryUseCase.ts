import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/error/AppError";
import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { ICategoryRepository } from "../../repositories/interface/ICategoryRepository";

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}
  async execute({ name, userID }: ICreateCategoryDTO) {
    const categoryAlreadyExists =
      await this.categoryRepository.findCategoryByUser(userID, name);

    if (categoryAlreadyExists) {
      throw new AppError("Category already exists");
    }
    await this.categoryRepository.create({ name, userID });
  }
}
