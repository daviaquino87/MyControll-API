import { Transaction } from "./Transation";

describe("Transaction generate test", () => {
  it("should be able possible to create a new Transaction", () => {
    const transaction = new Transaction({
      value: 12.5,
      type: "Deposit",
      userID: "idsidvisdv",
    });

    expect(transaction).toBeTruthy();
  });
});
