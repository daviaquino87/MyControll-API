import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { User } from "./User";

@Entity("categories")
export class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => User)
  @Column()
  userId: string;

  @CreateDateColumn()
  created_at: Date;
}
