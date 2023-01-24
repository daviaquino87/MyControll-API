export interface ICreateTransaction {
  value: number;
  type: string;
  userID: string;
  categoryID?: string;
}
