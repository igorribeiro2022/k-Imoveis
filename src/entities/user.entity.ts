import { Exclude } from "class-transformer";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { Schedules_users_properties } from "./schedules_users_properties.entity";

@Entity("users")
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @Column()
  name: string;

  @Column({unique: true})
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  isAdm: boolean;

  @Column({default: true})
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Schedules_users_properties, (schedules_users_properties) => schedules_users_properties.users)
  schedules_users_properties: Schedules_users_properties[]
}
