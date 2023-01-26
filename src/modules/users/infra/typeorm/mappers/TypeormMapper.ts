import { User as entitie } from "../../../entities/User";
import { User } from "../../../../../shared/infra/typeorm/entities/User";
import { CPF } from "../../../entities/cpf/Cpf";

export class TypeormMapper {
  public static toOrm(user: entitie): User {
    const raw: User = {
      id: user.id,
      name: user.name,
      email: user.email,
      birth_date: user.birth_date,
      cpf: user.cpf.value,
      password: user.password,
      created_at: user.created_At,
    };

    return raw;
  }

  public static toAplication(user: User): entitie {
    return new entitie(
      {
        name: user.name,
        email: user.email,
        cpf: new CPF(user.cpf),
        birth_date: user.birth_date,
        password: user.password,
        created_At: user.created_at,
      },
      user.id
    );
  }
}
