export interface ICreateTransaction {
  value: number;
  type: string;
  categoryID?: string;
  userID: string;
  transact_date?: Date;
}
