import { CategoryRepositoryInMemory } from "../../repositories/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

import { AppError } from "../../../../shared/error/AppError";

let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;

describe("create Category test", () => {
  beforeEach(() => {
    categoryRepositoryInMemory = new CategoryRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoryRepositoryInMemory
    );
  });
  it("should be able possible to create a new category", async () => {
    const category = {
      name: "CategoryNameTest",
      userID: "UserIDTest",
    };

    await createCategoryUseCase.execute(category);

    expect(categoryRepositoryInMemory.categories[0].name).toEqual(
      category.name
    );
  });

  it("should not be able possible to create a category with name already exists", async () => {
    const category = {
      name: "CategoryNameTest",
      userID: "UserIDTest",
    };

    await createCategoryUseCase.execute(category);

    expect(async () => {
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
