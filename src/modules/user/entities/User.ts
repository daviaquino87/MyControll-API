import { Replace } from "../../../helper/Replace";
import { v4 as uuidV4 } from "uuid";

interface IUserProps {
  name: string;
  email: string;
  cpf: string;
  birth_date: string;
  password: string;
  created_At: Date;
}

export class User {
  private _id: string;
  private props: IUserProps;

  constructor(props: Replace<IUserProps, { created_At?: Date }>, id?: string) {
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

  public set email(email: string) {
    this.props.email = email;
  }

  public get email(): string {
    return this.props.email;
  }

  public set cpf(cpf: string) {
    this.props.cpf = cpf;
  }

  public get cpf(): string {
    return this.props.cpf;
  }

  public set birth_date(birth_date: string) {
    this.props.birth_date = birth_date;
  }

  public get birth_date(): string {
    return this.props.birth_date;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get password(): string {
    return this.props.password;
  }

  public get created_At(): Date {
    return this.props.created_At;
  }
}
