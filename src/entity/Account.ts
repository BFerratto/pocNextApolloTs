import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column("text")
  email!: string;
}
