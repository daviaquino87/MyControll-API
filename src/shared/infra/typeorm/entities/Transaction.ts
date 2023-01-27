import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Category } from "./Category";
import { User } from "./User";

@Entity("transactions")
export class Transaction {
  @PrimaryColumn()
  id: string;

  @Column({ type: "float" })
  value: number;

  @Column({ type: "text" })
  type: string;

  @Column({ default: "now()" })
  transact_date: Date;

  @ManyToOne(() => User)
  @Column()
  userID: string;

  @ManyToOne(() => Category, { cascade: true })
  @Column({ type: "text", nullable: true })
  categoryID?: string;

  @CreateDateColumn()
  created_At: Date;
}
