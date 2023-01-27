import { AppdataSource } from "../../../../shared/infra/typeorm/data-source";

import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { ICategoryRepository } from "../../repositories/interface/ICategoryRepository";

import { Category } from "../../entities/Category";
import { Category as TypeormCategory } from "../../../../shared/infra/typeorm/entities/Category";
import { TypeormMapper } from "../mappers/TypeormMapper";

export class CategoryRepository implements ICategoryRepository {
  private repository;

  constructor() {
    this.repository = AppdataSource.getRepository(TypeormCategory);
  }

  async create({ name, userID }: ICreateCategoryDTO): Promise<void> {
    const data = new Category({
      name,
      userID,
    });

    const raw = this.repository.create(TypeormMapper.toTypeorm(data));

    await this.repository.save(raw);
  }
  async findCategoryByUser(userId: string, name: string): Promise<Category> {
    const data = await this.repository.findOneBy({ userId, name });

    if (!data) {
      return null;
    }

    const category = TypeormMapper.toApplication(data);

    return category;
  }

  async listCategories(userID: string): Promise<Category[]> {
    const data = await this.repository.findBy({ userId: userID });

    const categories = data.map((category) =>
      TypeormMapper.toApplication(category)
    );

    return categories;
  }
}
