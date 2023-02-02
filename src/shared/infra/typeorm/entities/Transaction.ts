import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("transactions")
export class Transaction {
  @PrimaryColumn()
  id: string;

  @Column()
  value: number;

  @Column()
  type: string;

  @Column({ default: "now()" })
  transact_date: Date;

  @Column()
  userID: string;

  @Column({ nullable: true })
  categoryID?: string;

  @CreateDateColumn()
  created_At: Date;
}
