import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  birth_date: Date;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;
}
