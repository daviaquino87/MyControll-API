import { Replace } from "../../../helper/Replace";
import { v4 as uuidV4 } from "uuid";

interface IPropsTransaction {
  value: number;
  type: string;
  userID: string;
  categoryID?: string;
  created_At: Date;
}

export class Transaction {
  private _id: string;
  private props: IPropsTransaction;

  constructor(
    props: Replace<IPropsTransaction, { created_At?: Date }>,
    id?: string
  ) {
    (this._id = id ?? uuidV4()),
      (this.props = {
        ...props,
        created_At: props.created_At ?? new Date(),
      });
  }

  public get id(): string {
    return this._id;
  }

  public set value(value: number) {
    this.props.value = value;
  }

  public get value(): number {
    return this.props.value;
  }

  public set type(type: string) {
    this.props.type = type;
  }

  public get type(): string {
    return this.props.type;
  }

  public set userID(userID: string) {
    this.props.userID = userID;
  }

  public get userID(): string {
    return this.props.userID;
  }

  public set categoryID(categoryID: string) {
    this.props.categoryID = categoryID;
  }

  public get categoryID(): string {
    return this.props.categoryID;
  }

  public get created_At(): Date {
    return this.props.created_At;
  }
}