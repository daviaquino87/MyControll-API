import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("transactions")
export class Transaction {
  @PrimaryColumn()
  id: string;

  @Column({ type: "float" })
  value: number;

  @Column({ type: "text" })
  type: string;

  @Column({ type: "text" })
  userID: string;

  @Column({ type: "text" })
  categoryID?: string;

  @CreateDateColumn()
  created_At: Date;
}
