import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  birth_date: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;
}
