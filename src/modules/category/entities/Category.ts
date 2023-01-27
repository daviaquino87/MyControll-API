import { Replace } from "../../../helper/Replace";
import { v4 as uuidV4 } from "uuid";

interface ICategoryProps {
  name: string;
  userID: string;
  created_At: Date;
}

export class Category {
  private _id: string;
  private props: ICategoryProps;

  constructor(
    props: Replace<ICategoryProps, { created_At?: Date }>,
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

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set userID(userID: string) {
    this.props.userID = userID;
  }

  public get userID(): string {
    return this.props.userID;
  }

  public get created_At(): Date {
    return this.props.created_At;
  }
}
