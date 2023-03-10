import { Replace } from "../../../helper/Replace";
import { v4 as uuidV4 } from "uuid";

import { CPF } from "./cpf/Cpf";

interface IUserProps {
  name: string;
  email: string;
  cpf: CPF;
  birth_date: Date;
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

  public set cpf(cpf: CPF) {
    this.props.cpf = cpf;
  }

  public get cpf(): CPF {
    return this.props.cpf;
  }

  public set birth_date(birth_date: Date) {
    this.props.birth_date = birth_date;
  }

  public get birth_date(): Date {
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
