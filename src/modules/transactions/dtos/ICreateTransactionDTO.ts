export interface ICreateTransaction {
  value: number;
  type: string;
  categoryID?: string;
  userID: string;
}
