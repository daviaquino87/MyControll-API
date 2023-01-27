import { Category } from "./Category";

describe("create a new category", () => {
  it("should be able possible to create a new transaction instance", () => {
    const category = new Category({
      name: "TestName",
      userID: "TestUserId",
    });

    expect(category).toBeTruthy();
  });
});
