import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { User } from "./User";

@Entity("transactions")
export class Transaction {
  @PrimaryColumn()
  id: string;

  @Column({ type: "float" })
  value: number;

  @Column({ type: "text" })
  type: string;

  @ManyToOne(() => User)
  @Column({ type: "text" })
  userID: string;

  @Column({ type: "text", nullable: true })
  categoryID?: string;

  @CreateDateColumn()
  created_At: Date;
}
