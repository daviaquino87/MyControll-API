import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("categories")
export class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  userId: string;

  @CreateDateColumn()
  created_at: Date;
}
