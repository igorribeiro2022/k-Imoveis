import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Properties } from "./properties.entity";
import { Users } from "./user.entity";

@Entity("schedules_users_properties")
export class Schedules_users_properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @CreateDateColumn()
  date: Date;

  @Column()
  hour: Date;

  @ManyToOne(() => Users, (Users) => Users.id)
  users: Users

  @ManyToOne(() => Properties, (Properties) => Properties.id)
  properties: Properties
}
