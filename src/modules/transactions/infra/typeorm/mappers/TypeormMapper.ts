import { Transaction } from "../../../entities/Transation";
import { Transaction as TypeormTransaction } from "../../../../../shared/infra/typeorm/entities/Transaction";

export class TypeormMapper {
  public static toTypeorm(transaction: Transaction): TypeormTransaction {
    const raw: TypeormTransaction = {
      id: transaction.id,
      value: transaction.value,
      type: transaction.type,
      userID: transaction.userID,
      transact_date: transaction.transact_date,
      categoryID: transaction.categoryID,
      created_At: transaction.created_At,
    };

    return raw;
  }

  public static toApplication(transaction: TypeormTransaction): Transaction {
    return new Transaction(
      {
        type: transaction.type,
        value: transaction.value,
        userID: transaction.userID,
        transact_date: transaction.transact_date,
        categoryID: transaction.categoryID,
        created_At: transaction.created_At,
      },
      transaction.id
    );
  }
}
