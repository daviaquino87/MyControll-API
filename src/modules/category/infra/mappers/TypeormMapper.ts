import { Category } from "../../entities/Category";
import { Category as TypeormCategory } from "../../../../shared/infra/typeorm/entities/Category";

export class TypeormMapper {
  public static toTypeorm(category: Category): TypeormCategory {
    const data: TypeormCategory = {
      id: category.id,
      name: category.name,
      userId: category.userID,
      created_at: category.created_At,
    };

    return data;
  }

  public static toApplication(category: TypeormCategory): Category {
    return new Category(
      {
        name: category.name,
        userID: category.userId,
        created_At: category.created_at,
      },
      category.id
    );
  }
}
