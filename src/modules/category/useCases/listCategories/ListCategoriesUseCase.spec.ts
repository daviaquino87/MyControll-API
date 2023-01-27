import { CategoryRepositoryInMemory } from "../../repositories/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;
let listCategoriesUseCase: ListCategoriesUseCase;

describe("list category test", () => {
  beforeEach(() => {
    categoryRepositoryInMemory = new CategoryRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoryRepositoryInMemory
    );

    listCategoriesUseCase = new ListCategoriesUseCase(
      categoryRepositoryInMemory
    );
  });
  it("should be able possible to list all categories of a user", async () => {
    const category = {
      name: "CategoryTest",
      userID: "categoryTest",
    };

    await createCategoryUseCase.execute(category);

    const categories = await listCategoriesUseCase.execute(category.userID);

    expect(categoryRepositoryInMemory.categories[0].name).toEqual(
      category.name
    );
  });
});
